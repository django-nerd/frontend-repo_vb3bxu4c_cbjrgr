import React from 'react';
import { Image, Mic, MessageSquare, Sparkles } from 'lucide-react';

export default function ChatPreview() {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={18} className="text-rose-600" />
            <h3 className="font-semibold text-rose-900">Real-time Chat</h3>
          </div>
          <ul className="text-sm text-rose-800/80 space-y-1.5">
            <li>• Typing indicator and read receipts</li>
            <li>• Auto-delete messages after 24 hours</li>
            <li>• Streaks persist with cute hearts</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Image size={18} className="text-rose-600" />
            <h3 className="font-semibold text-rose-900">Media Sharing</h3>
          </div>
          <p className="text-sm text-rose-800/80">Send images and short voice notes. Media is stored securely and auto-cleans within 24 hours.</p>
          <div className="mt-3 flex gap-2 text-rose-500">
            <span className="inline-flex items-center gap-1 text-xs bg-rose-50 px-2 py-1 rounded-full border border-rose-200"><Image size={14}/> Photos</span>
            <span className="inline-flex items-center gap-1 text-xs bg-rose-50 px-2 py-1 rounded-full border border-rose-200"><Mic size={14}/> Voice</span>
            <span className="inline-flex items-center gap-1 text-xs bg-rose-50 px-2 py-1 rounded-full border border-rose-200"><Sparkles size={14}/> Emojis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
