export const metadata = {
  title: "Privacy Policy - Coreball.cc",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your information at Coreball.cc.",
  keywords:
    "coreball privacy policy, privacy, data protection, coreball data policy",
  openGraph: {
    title: "Privacy Policy - Coreball.cc",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your information.",
    url: "https://coreball.cc/privacy",
    siteName: "Coreball",
    type: "website",
  },
  alternates: {
    canonical: "https://coreball.cc/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last Updated: March 3, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to Coreball.cc. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                explains how we collect, use, and safeguard your information
                when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Usage data (pages visited, time spent, game interactions)
                </li>
                <li>
                  Device information (browser type, operating system, IP
                  address)
                </li>
                <li>Cookies and similar tracking technologies</li>
                <li>
                  Any information you voluntarily provide through contact forms
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and improving our gaming services</li>
                <li>Analyzing website usage and performance</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Ensuring website security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Cookies
              </h2>
              <p className="leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site
                traffic, and understand where our visitors are coming from. You
                can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Third-Party Services
              </h2>
              <p className="leading-relaxed">
                We may use third-party services for analytics, advertising, and
                other purposes. These services may collect information about
                your use of our website. We encourage you to review their
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe we have collected such information, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Your Rights
              </h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                10. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy, please
                contact us at:{" "}
                <span className="font-semibold">focss@coreball.cc</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
