import React from "react";
import img1 from '../../assets/n1.jpg';
import img2 from '../../assets/one.jpg';
import img3 from '../../assets/n1.jpg';

export default function ComingSoonPlayground() {
  return (
    <main className="bg-black min-h-screen w-full py-8 px-4 flex flex-col">
      <header className="max-w-6xl mx-auto w-full border-b border-gray-700 pb-3 mb-6">
        <div className="flex items-center mb-2">
          <span className="text-gray-400 text-sm font-medium tracking-wide">
            Coming Soon Categories
          </span>
        </div>
        <h1 className="mt-4 text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug" style={{ fontFamily: "Inter, Helvetica, Arial, sans-serif" }}>
          Expanding Your<br />
          <span className="text-blue-500">Playground</span>
        </h1>
      </header>

      <section className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-12">
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className="flex-1 rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-300 min-h-[250px] sm:min-h-[300px] aspect-[4/3]"
            style={{
              boxShadow: '0px -19px 78px -47px rgba(255, 255, 255, 1)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #3b82f6, #ef4444)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box'
            }}
          >
            {/* Blurred Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(3px)'
              }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Coming Soon Content */}
            <div className="relative z-30 h-full flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  COMING SOON
                </p>
              </div>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-3xl transition-all duration-300"></div>
          </div>
        ))}
      </section>
    </main>
  );
}