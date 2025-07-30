'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ParticipateForm() {
  const {packag} = useRouter();
  

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    gotra: '',
    address: '',
    packageType: '',
  });

  const [step, setStep] = useState('form');

  useEffect(() => {
    if (packag) {
      setForm((prev) => ({
        ...prev,
        packageType: packag,
      }));
    }
  }, [packag]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setStep('payment');
  };

  const handlePayment = () => {
    alert('✅ Payment Successful! Your Puja booking is confirmed.');
    setForm({
      name: '',
      email: '',
      phone: '',
      gotra: '',
      address: '',
      packageType: '',
    });
    router.push('/');
  };

  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          {step === 'form' ? 'Puja Participation Form' : 'Secure Payment'}
        </h2>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <InputField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} required />
            <InputField label="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} required />
            <InputField label="Gotra (Optional)" name="gotra" value={form.gotra} onChange={handleChange} />
            <InputField label="Full Address" name="address" value={form.address} onChange={handleChange} required />

            <div>
              <label className="block text-sm font-semibold">Selected Package</label>
              <input
                type="text"
                value={form.packageType?.charAt(0).toUpperCase() + form.packageType?.slice(1) || 'N/A'}
                disabled
                className="w-full mt-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Proceed to Payment →
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-700 text-center">
              You’ve selected the <strong className="capitalize">{form.packageType}</strong> package.
            </p>
            <div className="bg-orange-100 p-5 rounded-lg text-center shadow-md">
              <p className="text-xl font-semibold text-orange-800">Total Amount: ₹{
                form.packageType === 'single' ? 551 :
                form.packageType === 'couple' ? 1100 :
                form.packageType === 'family' ? 2100 :
                form.packageType === 'vip' ? 3100 : 'N/A'
              }</p>
              <p className="text-sm text-gray-600 mt-2">Secure payment via UPI, Net Banking, or Cards</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Make Payment & Confirm Booking
              </button>

              <button
                onClick={() => setStep('form')}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                ← Back to Form
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Reusable input component
function InputField({ label, type = 'text', name, value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
}
