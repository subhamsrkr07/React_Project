import React from 'react'

const Contact = () => {
  return (
   <section className="bg-gradient-to-r from-red-300 to-purple-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact <span className="text-indigo-600">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Have a question, suggestion, or partnership idea? We’d love to hear from you. 
          Fill out the form below, and our team will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-indigo-50 p-8 rounded-lg shadow">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-indigo-50 p-6 rounded-lg shadow">
          <div className="text-3xl mb-2">📍</div>
          <h3 className="font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">123 Influencer St, New Delhi, India</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow">
          <div className="text-3xl mb-2">📞</div>
          <h3 className="font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow">
          <div className="text-3xl mb-2">✉️</div>
          <h3 className="font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">support@influencerconnect.com</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
