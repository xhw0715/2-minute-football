import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | CoreBall Games",
  description: "The page you're looking for doesn't exist.",
  alternates: {
    canonical: "https://coreball.cc/404",
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ← Back to Home
            </Link>
            {/* <Link
              href="/games"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse All Games
            </Link> */}
          </div>

          {/* Animated Game Icon */}
          <div className="animate-bounce">
            <svg
              className="w-24 h-24 mx-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>

          {/* Popular Games Suggestion */}
          <div className="mt-12 text-left bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Try These Popular Games Instead:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  → CoreBall - Test your precision and timing
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/games/snow-rider-3d"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  → Snow Rider 3D - Race down snowy slopes
                </Link>
              </li>
              <li>
                <Link
                  href="/games/slope"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  → Slope - Control the ball down endless slopes
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Coreball.cc. All rights reserved.</p>
      </footer>
    </div>
  );
}
