import React from 'react';
import { Compass, ChevronsDown, Shield, Map, Share2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/');
  };

  return (
    <div className="h-screen w-full overflow-y-auto scroll-snap-type-y snap-y snap-mandatory bg-background text-on-surface antialiased scroll-smooth">
      {/* FULL SCREEN IMMERSIVE (Snap Section 1) */}
      <section className="relative h-screen w-full flex flex-col justify-end p-8 overflow-hidden snap-start">
        <div className="absolute inset-0 z-0 bg-surface-container">
          <img 
            alt="Modern traveler looking at a sunset" 
            className="w-full h-full object-cover opacity-90 mix-blend-overlay" 
            src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?q=80&w=2000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
        </div>
        
        <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <Compass size={24} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">Tredit.</h1>
          </div>
          <button onClick={handleGetStarted} className="text-white/80 hover:text-white font-medium text-sm transition-colors">Skip</button>
        </header>
        
        <div className="relative z-10 space-y-6 mb-12">
          <h2 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-md">
            Your world,<br/>archived.
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-sm drop-shadow-sm">
            Join a community of 12k+ explorers tracking their journeys with privacy-first tools.
          </p>
          <div className="animate-bounce flex justify-center pt-8">
            <ChevronsDown size={32} className="text-white/60" />
          </div>
        </div>
      </section>

      {/* BENTO VALUE PROPS (Snap Section 2) */}
      <section className="h-screen w-full bg-surface p-6 md:p-12 flex flex-col justify-center gap-6 snap-start">
        <div className="space-y-2 mb-2 max-w-lg mx-auto w-full text-center md:text-left">
          <span className="text-primary font-black text-xs uppercase tracking-[0.2em]">Why Tredit?</span>
          <h3 className="text-4xl font-headline font-black tracking-tight text-on-surface">Thoughtful Exploration.</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow max-h-[60vh] max-w-4xl mx-auto w-full">
          <div className="col-span-2 bg-gradient-primary rounded-[2rem] p-8 flex flex-col justify-between shadow-lg shadow-primary/20 text-white relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Shield size={200} strokeWidth={1} />
            </div>
            <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm mb-8 relative z-10">
              <Shield size={32} className="text-white" />
            </div>
            <div className="relative z-10">
              <h4 className="font-extrabold text-2xl mb-2">Zero Background Tracking</h4>
              <p className="text-sm text-white/80 font-medium max-w-xs">We only record when you tell us to. Your battery and privacy are yours.</p>
            </div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm group hover:shadow-md transition-shadow">
            <div className="bg-secondary/10 w-fit p-3 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Map size={24} className="text-secondary" />
            </div>
            <p className="font-extrabold text-lg leading-tight text-on-surface">Beautifully Rendered Archives</p>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm md:col-span-1 col-span-2 group hover:shadow-md transition-shadow">
             <div className="bg-tertiary/10 w-fit p-3 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Share2 size={24} className="text-tertiary" />
            </div>
            <p className="font-extrabold text-lg leading-tight text-on-surface">Private Social Sharing</p>
          </div>
        </div>
        <div className="pt-4 flex justify-center pb-8">
          <div className="w-2 h-2 rounded-full bg-outline-variant/30 mx-1.5"></div>
          <div className="w-6 h-2 rounded-full bg-primary mx-1.5"></div>
          <div className="w-2 h-2 rounded-full bg-outline-variant/30 mx-1.5"></div>
        </div>
      </section>

      {/* MINIMAL LOGIN (Snap Section 3) */}
      <section className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 snap-start relative overflow-hidden">
        {/* Floating Illustration element */}
        <div className="absolute top-12 -right-4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-8 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-sm space-y-10 relative z-10 text-center bg-white/50 backdrop-blur-sm p-8 rounded-[3rem] border border-white/40 shadow-ambient">
          <div>
            <div className="w-20 h-20 bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/10 flex items-center justify-center mx-auto mb-6">
              <Compass size={40} className="text-primary" />
            </div>
            <h3 className="text-4xl font-headline font-black tracking-tight text-on-surface">Ready to fly?</h3>
            <p className="text-on-surface-variant mt-3 font-medium text-lg">Start your journey in seconds.</p>
          </div>
          
          {/* Minimalist Form */}
          <div className="space-y-4">
            <div className="relative group">
              <input 
                className="w-full h-14 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-6 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline-variant outline-none font-medium text-on-surface shadow-sm" 
                placeholder="Email address" 
                type="email"
              />
            </div>
            <button 
              onClick={handleGetStarted}
              className="w-full h-14 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary-container hover:scale-[1.02] active:scale-95 transition-all"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant/10"></div>
            <span className="mx-4 text-[10px] font-black text-outline uppercase tracking-widest">Quick Connect</span>
            <div className="flex-grow border-t border-outline-variant/10"></div>
          </div>
          
          {/* Minimal Social Row */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/10 shadow-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81.38z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
            </button>
            <button 
              onClick={handleGetStarted}
              className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/10 shadow-sm flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all text-slate-900"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.671-1.48 3.674-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 4.82c.844-1.026 1.402-2.454 1.247-3.87-1.208.052-2.675.818-3.532 1.831-.78.909-1.467 2.363-1.286 3.74 1.35.104 2.727-.675 3.571-1.701z"></path>
              </svg>
            </button>
          </div>
          
          <p className="text-[10px] text-on-surface-variant font-medium leading-relaxed">
            By signing up, you agree to our <br/>
            <a className="underline font-bold hover:text-primary transition-colors" href="#">Terms</a> &amp; <a className="underline font-bold hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </p>
        </div>
      </section>
    </div>
  );
}
