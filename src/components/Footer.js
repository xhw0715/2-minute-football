import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/95 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4 pt-6 pb-2">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">
              2 Minute Football
            </h3>
            <p className="text-gray-600 text-sm">
              Experience the thrill of American football in this fast-paced
              quarterback game. Lead your team to victory in just 2 minutes!
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://twitter.com/intent/tweet?url=https://2minutefootball.com/ - Play 2 Minute Football!"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Share on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://2minutefootball.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                aria-label="Share on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Game Features */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">More Games</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://coreball.cc/" target="_blank">
                  Coreball
                </a>
              </li>
              <li>
                <a
                  href="https://coreball.cc/games/stickman-hook"
                  target="_blank"
                >
                  Stickman Hook
                </a>
              </li>
              <li>
                <a
                  href="https://coreball.cc/games/basket-random-topvaz-games"
                  target="_blank"
                >
                  Basket Random
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">
              Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Free to play</li>
              <li>✓ No downloads required</li>
              <li>✓ Play on any device</li>
              <li>✓ Unblocked game</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-gray-200 pt-0 text-center">
          {/* Legal Links */}
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="flex flex-wrap justify-center gap-4 mb-1">
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/dmca"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
              >
                DMCA
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            © {currentYear} 2 Minute Football. All rights reserved. Play free
            online football game.
          </p>
        </div>
      </div>
    </footer>
  );
}
