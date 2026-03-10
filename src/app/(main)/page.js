"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { getAllGames } from "@/lib/games";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);
  const iframeRef = useRef(null);

  // 获取2 Minute Football游戏数据
  const allGames = getAllGames();
  const footballGame = allGames[0]; // 现在只有一个游戏

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - 2 Minute Football Game */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              2 Minute Football
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Ready to lead your team to victory? 2 Minute Football is an
              exciting sports game where you step into the cleats of a star
              quarterback. With the clock ticking down, your mission is to lead
              your team down the field and score as many touchdowns as possible
              before time expires.
            </p>
          </div>

          {/* Game iframe */}
          <div className="max-w-5xl mx-auto mb-8">
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-200 h-[560px] md:h-auto"
              style={{ paddingBottom: "0", aspectRatio: "auto" }}
              ref={iframeRef}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    padding-bottom: 56.25% !important;
                  }
                }
              `}</style>
              <iframe
                src={footballGame.iframe_url}
                className="absolute top-0 left-0 w-full h-full border-0"
                title="2 Minute Football Game"
                allowFullScreen
              />
            </div>
            <div className="mt-2 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
              <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={footballGame.thumbnail}
                    alt="2 Minute Football"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 md:flex-none">
                  <h2 className="text-white font-bold text-base md:text-lg uppercase tracking-wide">
                    2 Minute Football
                  </h2>
                  <p className="text-gray-300 text-xs md:text-sm">
                    Fast-paced football action
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded transition-all flex-1 md:flex-none ${
                    isLiked
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                      isLiked ? "fill-white" : "fill-current"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </button>

                <button
                  onClick={handleFullscreen}
                  className="flex items-center justify-center gap-1 md:gap-2 bg-white/10 hover:bg-white/20 text-white px-3 md:px-4 py-2 rounded transition-colors flex-1 md:flex-none"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">
                    Fullscreen
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto bg-white opacity-80 rounded-lg shadow-2xl border border-gray-200 p-8">
          {footballGame.FAQ &&
            footballGame.FAQ.map((faq, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.title}
                </h2>
                <div className="text-gray-700 whitespace-pre-line">
                  {faq.content}
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
