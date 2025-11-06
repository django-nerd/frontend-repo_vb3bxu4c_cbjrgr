import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export default function LoginCard({ onProceed }) {
  const [phone, setPhone] = useState('');

  const normalized = (val) => {
    let v = val.replace(/\s|-/g, '');
    if (!v.startsWith('+91')) {
      if (v.startsWith('0')) v = v.slice(1);
      if (v.length <= 10) v = `+91${v}`;
    }
    return v;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = normalized(phone);
    if (!/^\+91\d{10}$/.test(value)) {
      alert('Please enter a valid Indian phone number');
      return;
    }
    onProceed?.(value);
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
          <Phone size={18} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rose-900">Sign in</h2>
          <p className="text-sm text-rose-700/70">Indian phone number (+91)</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex rounded-xl overflow-hidden border border-rose-200 bg-white focus-within:ring-2 focus-within:ring-rose-300">
          <span className="px-3 py-3 text-rose-700/80 select-none">+91</span>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="9876543210"
            className="flex-1 px-3 py-3 outline-none text-rose-900 placeholder:text-rose-400"
            value={phone.replace(/^\+91/, '')}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 text-white py-3 font-medium shadow hover:bg-rose-600 transition-colors"
        >
          Continue
          <ArrowRight size={16} />
        </button>
      </form>
      <p className="text-xs text-rose-700/70 mt-3">Demo only: no SMS will be sent here.</p>
    </div>
  );
}
