export const metadata = {
  title: "About Us - Coreball.cc",
  description:
    "Learn more about Coreball.cc and our mission to provide the best free online gaming experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to Coreball.cc
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Coreball.cc is your premier destination for free online arcade
                games. We are dedicated to bringing you the most engaging and
                challenging browser-based games that you can enjoy anytime,
                anywhere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About Coreball Game
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We hereby declare that Coreball.cc is an unofficial fan site
                dedicated to the immensely popular arcade game Coreball. It is
                important to note that our website, Coreball.cc, does not
                possess ownership of the game Coreball. We function solely as a
                platform for fans of the original game to gather and engage with
                related content. Our site is in no way affiliated with or
                authorized by the game's developer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to provide high-quality, accessible
                gaming experiences that are completely free and unblocked. We
                believe that everyone should have access to fun and challenging
                games without barriers or costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What We Offer
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>100% free-to-play games with no hidden costs</li>
                <li>No downloads or installations required</li>
                <li>Cross-platform compatibility - play on any device</li>
                <li>Regular updates and new game additions</li>
                <li>Safe and secure gaming environment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Community
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We are proud to serve a growing community of players from around
                the world. Your feedback and support help us continuously
                improve and expand our game collection. Join us on social media
                to stay updated with the latest news and game releases.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
