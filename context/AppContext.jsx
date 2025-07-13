"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const { user } = useUser();
  const { getToken } = useAuth();
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const fetchProductData = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchUserData = async () => {
    try {
      if (user.publicMetadata.role === "seller") {
        setIsSeller(true);
      }
      const token = await getToken();
      const { data } = await axios.get("/api/user/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setUserData(data.user);
        setCartItems(data.user.cartItems);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);

    if (user) {
      try {
        const token = await getToken();
        await axios.post(
          "/api/cart/update",
          { cartData },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Item added to cart");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const updateCartQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
    if (user) {
      try {
        const token = await getToken();
        await axios.post(
          "/api/cart/update",
          { cartData },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Cart Updated");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        totalCount += cartItems[items];
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(
        (product) => String(product._id) === String(itemId)
      );

      if (itemInfo && cartItems[itemId] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };
  const cleanUpCartItems = () => {
    const validProductIds = products.map((product) => String(product._id));
    let cleanedCart = { ...cartItems }; // Clone current cartItems

    for (const itemId in cartItems) {
      if (!validProductIds.includes(String(itemId))) {
        // Remove invalid product from cart
        delete cleanedCart[itemId];
      }
    }

    // If the cart has changed, update the state and backend
    if (Object.keys(cleanedCart).length !== Object.keys(cartItems).length) {
      setCartItems(cleanedCart);

      if (user) {
        getToken().then((token) => {
          axios.post(
            "/api/cart/update",
            { cartData: cleanedCart },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        });
      }
    }
  };

  useEffect(() => {
    if (user && products.length > 0 && Object.keys(cartItems).length > 0) {
      cleanUpCartItems();
    }
  }, [user, products, cartItems]);

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const value = {
    user,
    getToken,
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
