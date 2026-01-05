import { useState } from "react";

export default function App() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col md:flex-row">
      {/* Navbar */}
      <nav className="
        fixed md:static
        top-0 left-0
        w-full md:w-64
        h-auto md:h-screen
        border-b md:border-b-0 md:border-r border-gray-800
        px-6 py-4 md:py-10
        flex flex-col
        bg-black/90 backdrop-blur-md md:bg-black
        z-50
      ">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-10 text-center md:text-left">
          Mohammad Umair
        </h1>
        
        {/* Navigation Links - Horizontal on mobile, Vertical on desktop */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`transition-all duration-300 ${
                active === tab ? "text-white font-semibold" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="
        flex-1
        pt-32 md:pt-10 /* More padding top on mobile to clear the fixed nav */
        p-6 md:p-16
        animate-fadeIn
      ">
        {active === "Home" && (
          <section className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Text Container */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="text-4xl md:text-6xl font-semibold mb-4">Welcome</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                This website is still under construction. I'm a data scientist & Python developer exploring the web.
              </p>
            </div>

            {/* Image Container */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <img 
                src="/my-portfolio/MyPhoto.jpg" 
                alt="Mohammad Umair" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-2 border-gray-800 shadow-2xl"
              />
            </div>
          </section>
        )}

        {active === "Projects" && (
          <section className="max-w-3xl">
            <h2 className="text-4xl font-semibold mb-6">Projects</h2>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/muwk/EDA-Youtube_Trending_Videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-xl transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">→</span> YouTube Trending EDA
                </a>
              </li>
              <li className="text-gray-500 italic">More projects coming soon...</li>
            </ul>
          </section>
        )}

        {/* About & Contact sections stay similar but ensure text-center md:text-left is applied */}
      </main>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
