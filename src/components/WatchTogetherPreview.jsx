import React from 'react';
import { MonitorUp, Play, Volume2, Maximize } from 'lucide-react';

export default function WatchTogetherPreview() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <MonitorUp size={18} className="text-rose-600" />
          <h3 className="font-semibold text-rose-900">Watch Together</h3>
        </div>
        <p className="text-sm text-rose-800/80">Share your screen in one click and stay in sync with play/pause, mute, and fullscreen controls.</p>
        <div className="mt-4 grid grid-cols-3 gap-3 text-rose-600">
          <div className="flex items-center justify-center rounded-xl bg-rose-50 border border-rose-200 py-3"><Play size={18} /> <span className="ml-2 text-xs">Play</span></div>
          <div className="flex items-center justify-center rounded-xl bg-rose-50 border border-rose-200 py-3"><Volume2 size={18} /> <span className="ml-2 text-xs">Mute</span></div>
          <div className="flex items-center justify-center rounded-xl bg-rose-50 border border-rose-200 py-3"><Maximize size={18} /> <span className="ml-2 text-xs">Fullscreen</span></div>
        </div>
      </div>
    </section>
  );
}
