import React from 'react';
import { Heart, Shield } from 'lucide-react';

export default function Header({ secretMode, onToggleSecret }) {
  return (
    <header className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between px-6 pt-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow">
          <Heart className="text-rose-500" size={22} />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-rose-900">Secret Couple Space</h1>
          <p className="text-xs text-rose-700/70 -mt-0.5">Private chat + watch together</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border ${secretMode ? 'border-rose-400/70 bg-white/60' : 'border-white/50 bg-white/40'} backdrop-blur shadow-sm` }>
          <Shield size={16} className="text-rose-600" />
          <span className="text-sm text-rose-900/80">Secret mode</span>
          <button
            onClick={onToggleSecret}
            aria-label="Toggle secret mode"
            className={`ml-2 h-5 w-9 rounded-full transition-colors ${secretMode ? 'bg-rose-500' : 'bg-rose-300'}`}
          >
            <span className={`block h-5 w-5 bg-white rounded-full shadow transition-transform ${secretMode ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
