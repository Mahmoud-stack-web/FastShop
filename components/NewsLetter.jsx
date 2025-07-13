import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulating a request to a backend (you can replace this with actual API call)
    try {
      // Here you would typically send the email to your backend API
      console.log("Email submitted:", email);
      setIsSubscribed(true);
      setEmail(""); // Clear the input after submission
    } catch (err) {
      setError("There was an error, please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {/* Show success message if the user is subscribed */}
      {isSubscribed && (
        <p className="text-green-600">Thank you for subscribing!</p>
      )}

      {/* Show error message if there's an issue */}
      {error && <p className="text-red-600">{error}</p>}

      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
