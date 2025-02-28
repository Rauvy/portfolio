import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full bg-[#222831] p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl text-[#FFD369] font-bold text-center mb-6">Let's Connect</h2>

      {submitted && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#393E46] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD369]"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#393E46] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD369]"
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#393E46] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD369]"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FFD369] text-black font-bold py-3 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
