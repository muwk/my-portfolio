import { useState } from "react";

export default function App() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col md:flex-row">
      {/* --- Sidebar Navbar --- */}
      <nav className="
  fixed md:static
  top-0 left-0
  w-full md:w-64
  h-auto md:h-screen
  border-b md:border-b-0 md:border-r border-gray-800
  px-6 py-4 md:py-12
  flex flex-col
  bg-black/90 backdrop-blur-md md:bg-black
  z-50
">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-12 text-center md:text-left tracking-tight">
          Mohammad Umair
        </h1>
        
        {/* Navigation Links */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start gap-5 md:gap-6 text-sm md:text-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`transition-all duration-300 hover:scale-105 ${
                active === tab 
                ? "text-white font-semibold underline underline-offset-8 decoration-gray-600 md:no-underline" 
                : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="
  flex-1
  pt-32 md:pt-0
  md:flex md:items-center
  p-6 md:p-16
  animate-fadeIn
">
        
        {/* --- Home Section --- */}
        {active === "Home" && (
          <section className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Image (Shows first on mobile) */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <img 
                src="/my-portfolio/MyPhoto.jpg" 
                alt="Mohammad Umair" 
                className="w-44 h-44 md:w-80 md:h-80 object-cover rounded-3xl border-2 border-gray-800 shadow-2xl"
              />
            </div>

            {/* Text Container */}
            <div className="text-center md:text-left order-2 md:order-1 flex-1">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Welcome
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                Hi, I’m Umair.
                This is my personal portfolio — showcasing my skills, projects, and professional focus.
                Explore to see what I build and how I think.
              </p>
            </div>
          </section>
        )}

        {/* --- Projects Section --- */}
        {active === "Projects" && (
          <section className="max-w-3xl w-full">
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Projects</h2>
            <div className="grid gap-6">
              <a 
                href="https://github.com/muwk/EDA-Youtube_Trending_Videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition-all"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  YouTube Trending EDA →
                </h3>
                <p className="text-gray-500 mt-2">Exploratory Data Analysis using Python and Pandas.</p>
              </a>
              
              <div className="p-6 border border-gray-800 border-dashed rounded-xl">
                <p className="text-gray-600">More projects coming soon...</p>
              </div>
            </div>
          </section>
        )}

        {/* --- About Section --- */}
        {active === "About" && (
          <section className="max-w-2xl w-full">
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About Me</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed text-center md:text-left">
               <p>
                I am a Data Scientist with a passion for Coding,Machine Leanring and Deep Leanring. 
                I like reading biographies of great men.
                I think Jungian psychology might have the key.
                Someday i would love to work on video games.
              </p>
              <code className="block bg-gray-900 p-4 rounded-lg text-green-400 text-sm md:text-base overflow-x-auto">
                tars.set_humor(level=100)
              </code>
            </div>
          </section>
        )}

        {/* --- Contact Section --- */}
        {active === "Contact" && (
          <section className="max-w-3xl w-full text-center md:text-left">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Email</p>
                <a href="mailto:umairwachkoo@gmail.com" className="text-xl md:text-2xl hover:text-blue-400 transition-colors">
                  umairwachkoo@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/mohammad-umair-858566289/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl hover:text-blue-400 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Fade-in Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
