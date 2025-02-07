'use client'


import React, { useState } from 'react'
import { FaBell } from 'react-icons/fa'; // Assuming you are using react-icons for bell

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showModal, setShowModal] = useState(false)  // For showing email input modal

  // Handle subscription
  const handleSubscribe = (e:any) => {
    e.preventDefault()
    if (email) {
      // Simulate successful subscription
      setIsSubscribed(true)
      setEmail('')
      setShowModal(false)  // Close the modal after subscribing
      alert('You have successfully subscribed!')
    } else {
      alert('Please enter a valid email address.')
    }
  }

  // Handle bell icon click
  const handleBellClick = () => {
    setShowModal(true)  // Show the subscription modal on bell click
  }

  return (
    <div className="flex justify-center items-center h-[500px]  bg-[#f6f7f9]">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Subscribe to our Rental website
        </h2>

        {/* Bell Icon - This is your existing bell icon */}
        <div className="text-center mb-6">
          <button
            onClick={handleBellClick}  // Show modal on bell click
            className="p-2 bg-blue-700 text-white rounded-full hover:bg-yellow-600"
          >
            <FaBell size={24} />
          </button>
        </div>

        {/* Modal for subscribing - only shown if showModal is true */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-semibold mb-4">Enter your email to subscribe:</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </form>
              <button
                onClick={() => setShowModal(false)}  // Close modal
                className="w-full py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Subscribe