import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-12 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          📞 Contact Us
        </h1>
        <p className="mb-8 text-gray-600 text-lg max-w-2xl">
          Have a question, issue, or feedback? We're here to help! Reach out to
          us and our team will get back to you as soon as possible.
        </p>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-2">📬 Email</h2>
            <p className="text-gray-700">support@yourstore.com</p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">📱 Phone</h2>
            <p className="text-gray-700">+1 (800) 123-4567</p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">🏢 Office Address</h2>
            <p className="text-gray-700">
              1234 Commerce Street,
              <br />
              E-Shop Plaza, Suite 500,
              <br />
              Tyr, CA 94105
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">🕒 Business Hours</h2>
            <p className="text-gray-700">
              Monday – Friday: 9 AM – 6 PM
              <br />
              Saturday: 10 AM – 4 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium mb-4">📝 Send Us a Message</h2>
          <p className="text-gray-600 mb-4">
            (Coming Soon: A form to contact us directly from this page!)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
