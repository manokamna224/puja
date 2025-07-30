'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PrasadBuyPage() {
  const { slug } = useParams()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    quantity: 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can integrate payment gateway API here
    console.log('Booking Prasad:', { slug, ...form })
    alert('Your Prasad order has been placed successfully!')
  }

  const pricePerUnit = 251
  const totalPrice = pricePerUnit * form.quantity

  return (
    <section className="min-h-screen px-6 py-10 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Order Prasad for <span className="text-orange-500 capitalize">{slug.replace(/-/g, ' ')}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Shipping Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              value={form.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg text-center text-gray-800 font-medium">
            Total Price: <span className="text-orange-600 font-bold">₹{totalPrice}</span>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </section>
  )
}
