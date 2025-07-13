import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6 md:p-12 max-w-5xl mx-auto text-gray-800 space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-4 text-orange-600">About Us</h1>
          <p className="text-lg">
            Welcome to <span className="font-semibold">QuickCart</span> — your
            trusted destination for the latest tech and accessories. We are
            passionate about offering top-notch products that blend quality,
            innovation, and affordability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is simple — to make premium electronics and accessories
            accessible to everyone. We aim to provide a smooth, secure, and
            satisfying online shopping experience for our customers worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            Founded in 2025, <span className="font-semibold">QuickCart</span> is
            made up of a small, passionate team of tech enthusiasts. From day
            one, we’ve focused on curating reliable products and delivering
            excellent customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What Sets Us Apart</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>🛒 Curated selection of trending gadgets and accessories</li>
            <li>🚀 Fast and reliable delivery with real-time tracking</li>
            <li>💬 Responsive customer support</li>
            <li>🔐 Secure payment methods</li>
            <li>💡 User-friendly interface and seamless shopping experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Integrity and honesty in everything we do</li>
            <li>Putting customers first</li>
            <li>Commitment to innovation and improvement</li>
            <li>Building long-term relationships with our customers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Looking Ahead</h2>
          <p>
            As we grow, our goal is to expand our product range and continue
            improving the experience you have with us. We’re also working toward
            eco-friendly packaging and partnering with ethical suppliers.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          <p>
            Questions? Want to partner with us? Reach out through our{" "}
            <a href="/contact" className="text-orange-600 underline">
              Contact Page
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
