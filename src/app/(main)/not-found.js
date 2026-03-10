import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Game Not Found
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The game you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/games"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Browse All Games
          </Link>
        </div>

        {/* Animated Game Icon */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-24 h-24 mx-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
