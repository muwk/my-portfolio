import { useState } from "react";

export default function App() {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [active, setActive] = useState("Home");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="
  fixed top-0 left-0
  h-auto md:h-full
  w-full md:w-52
  border-r border-gray-800
  px-6 py-6
  flex md:flex-col gap-6
  bg-black z-50
">
        <h1 className="text-2xl font-bold mb-6">Mohammad Umair</h1>
        <div className="flex flex-col gap-4 text-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-left transition-all duration-300 ${
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
  pt-24 md:pt-10
  md:ml-60
  p-6 md:p-10
  animate-fadeIn
">
        {active === "Home" && (
          /* 1. Changed max-w-3xl to max-w-5xl to fit both text and image */
          /* 2. Added 'flex', 'items-center', and 'justify-between' to put them side-by-side */
          <section className="
  max-w-5xl w-full
  flex flex-col md:flex-row
  items-center justify-between
  gap-10
">
            
            {/* Text Container */}
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold mb-4">Welcome</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                This website is still under construction.
              </p>
            </div>

            {/* Image Container */}
            <div className="flex-shrink-0">
              <img 
                src="/my-portfolio/MyPhoto.jpg" /* REPLACE THIS WITH YOUR IMAGE PATH */
                alt="Mohammad Umair" 
                /* Styling: Width/Height 64 (256px), Rounded corners, Gray border */
                className="w-64 h-64 object-cover rounded-2xl border-2 border-gray-800 shadow-lg"
              />
            </div>
          </section>
        )}

        {active === "Projects" && (
          <section className="max-w-3xl">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li> <a 
          href="https://github.com/muwk/EDA-Youtube_Trending_Videos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors cursor-pointer block"
        >
          • YouTube Trending EDA
        </a></li>

              <li className="hover:text-white transition-colors cursor-pointer">• </li>
              <li className="hover:text-white transition-colors cursor-pointer">•</li>
              <li className="hover:text-white transition-colors cursor-pointer">• </li>
            </ul>
          </section>
        )}

        {active === "About" && (
          <section className="max-w-3xl">
            <h2 className="text-4xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              tars.set_humor(level=100)
            </p>
          </section>
        )}

        {active === "Contact" && (
          <section className="max-w-3xl">
            <h2 className="text-4xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Email: umairwachkoo@gmail.com <br /> LinkedIn: https://www.linkedin.com/in/mohammad-umair-858566289/
            </p>
          </section>
        )}
      </main>

      {/* Simple animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
