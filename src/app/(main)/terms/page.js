export const metadata = {
  title: "Terms of Use - Coreball.cc",
  description:
    "Read our terms of use to understand the rules and guidelines for using Coreball.cc and playing our games.",
  keywords:
    "coreball terms, terms of use, coreball rules, terms and conditions",
  openGraph: {
    title: "Terms of Use - Coreball.cc",
    description:
      "Read our terms of use to understand the rules and guidelines for using Coreball.cc.",
    url: "https://coreball.cc/terms",
    siteName: "Coreball",
    type: "website",
  },
  alternates: {
    canonical: "https://coreball.cc/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Use
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last Updated: March 3, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing and using Coreball.cc, you accept and agree to be
                bound by these Terms of Use. If you do not agree to these terms,
                please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Use of Services
              </h2>
              <p className="leading-relaxed mb-3">
                You agree to use our services only for lawful purposes and in
                accordance with these terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Use the website in any way that violates applicable laws or
                  regulations
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or networks
                </li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>
                  Use automated systems to access the website without permission
                </li>
                <li>
                  Engage in any activity that could harm or impair the website's
                  functionality
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on Coreball.cc, including but not limited to text,
                graphics, logos, and software, is the property of Coreball.cc or
                its content suppliers and is protected by copyright and other
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Game Content
              </h2>
              <p className="leading-relaxed">
                The games available on our website are provided for
                entertainment purposes only. We do not guarantee that games will
                be available at all times or that they will be error-free. We
                reserve the right to modify, suspend, or discontinue any game at
                any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Third-Party Links
              </h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the content, privacy policies, or practices
                of these external sites. Accessing third-party links is at your
                own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p className="leading-relaxed">
                Our services are provided "as is" and "as available" without any
                warranties of any kind, either express or implied. We do not
                warrant that the website will be uninterrupted, secure, or
                error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Coreball.cc shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of the
                website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. User Conduct
              </h2>
              <p className="leading-relaxed">
                You are responsible for your conduct while using our services.
                We reserve the right to terminate or suspend your access to the
                website if you violate these terms or engage in inappropriate
                behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Modifications to Terms
              </h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting. Your
                continued use of the website after changes are posted
                constitutes your acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                10. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms of Use shall be governed by and construed in
                accordance with applicable laws, without regard to conflict of
                law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                11. Contact Information
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Use, please
                contact us at:
                <span className="font-semibold"> focss@coreball.cc</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
