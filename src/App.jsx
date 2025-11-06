import React, { useState } from 'react';
import Header from './components/Header';
import GradientBackground from './components/GradientBackground';
import LoginCard from './components/LoginCard';
import ChatPreview from './components/ChatPreview';
import WatchTogetherPreview from './components/WatchTogetherPreview';

function App() {
  const [secretMode, setSecretMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [phone, setPhone] = useState('');

  const handleLogin = (normalizedPhone) => {
    setPhone(normalizedPhone);
    setLoggedIn(true);
  };

  return (
    <div className={`relative min-h-screen text-rose-950 ${secretMode ? 'backdrop-blur-sm' : ''}`}>
      <GradientBackground />

      <div className={`relative z-10 min-h-screen flex flex-col`}>        
        <Header secretMode={secretMode} onToggleSecret={() => setSecretMode((v) => !v)} />

        <main className="flex-1 flex flex-col items-center justify-start gap-8 pb-16">
          <section className="w-full max-w-6xl mx-auto px-6 pt-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-rose-900 tracking-tight">
              Secret Couple Space 💖
            </h2>
            <p className="mt-3 text-rose-800/80 max-w-2xl mx-auto">
              Private chat and watch-together, wrapped in a romantic gradient. Messages vanish in 24 hours; streaks stay forever.
            </p>
          </section>

          {!loggedIn ? (
            <LoginCard onProceed={handleLogin} />
          ) : (
            <section className="relative z-10 w-full max-w-6xl mx-auto px-6">
              <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 p-5 shadow-xl">
                <p className="text-sm text-rose-800/80">
                  Welcome, <span className="font-semibold text-rose-900">{phone}</span> — explore what you'll get after sign-in.
                </p>
              </div>
            </section>
          )}

          <ChatPreview />
          <WatchTogetherPreview />

          <footer className="w-full max-w-6xl mx-auto px-6 text-center text-xs text-rose-700/70">
            This is a design + interaction preview. Full app will use Supabase Auth, Realtime, Storage and WebRTC.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
