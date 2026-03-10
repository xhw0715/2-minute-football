export const metadata = {
  title: "DMCA - Copyright Infringement Notice Procedure - Coreball.cc",
  description:
    "Learn about our DMCA policy and how to report copyright infringement at Coreball.cc. File a takedown request or counter-notification.",
  keywords: "dmca, copyright, takedown, copyright infringement, dmca notice",
  openGraph: {
    title: "DMCA - Copyright Infringement Notice Procedure - Coreball.cc",
    description:
      "Learn about our DMCA policy and how to report copyright infringement.",
    url: "https://coreball.cc/dmca",
    siteName: "Coreball",
    type: "website",
  },
  alternates: {
    canonical: "https://coreball.cc/dmca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Copyright Infringement Notice Procedure
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last Updated: March 3, 2026</p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                DMCA Policy
              </h2>
              <p className="leading-relaxed">
                Coreball.cc respects the intellectual property rights of others
                and expects our users to do the same. In accordance with the
                Digital Millennium Copyright Act (DMCA), we will respond to
                valid notices of copyright infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Filing a DMCA Notice
              </h2>
              <p className="leading-relaxed mb-3">
                If you believe that your copyrighted work has been copied in a
                way that constitutes copyright infringement, please provide our
                Copyright Agent with the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  A physical or electronic signature of the copyright owner or
                  authorized representative
                </li>
                <li>
                  Identification of the copyrighted work claimed to have been
                  infringed
                </li>
                <li>
                  Identification of the material that is claimed to be
                  infringing, with sufficient detail for us to locate it
                </li>
                <li>
                  Your contact information (address, telephone number, and email
                  address)
                </li>
                <li>
                  A statement that you have a good faith belief that the
                  disputed use is not authorized
                </li>
                <li>
                  A statement, under penalty of perjury, that the information in
                  the notice is accurate
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="leading-relaxed">
                Please send DMCA notices to our designated Copyright Agent:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <p className="font-semibold">Email: focss@coreball.cc</p>
                <p className="text-sm mt-2">
                  Subject Line: DMCA Takedown Request
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Counter-Notification
              </h2>
              <p className="leading-relaxed mb-3">
                If you believe that your content was removed by mistake or
                misidentification, you may file a counter-notification
                containing:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that was removed</li>
                <li>
                  A statement under penalty of perjury that you have a good
                  faith belief the material was removed by mistake
                </li>
                <li>Your name, address, and telephone number</li>
                <li>
                  A statement consenting to jurisdiction of the federal court
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Repeat Infringers
              </h2>
              <p className="leading-relaxed">
                We will terminate the accounts of users who are repeat
                infringers of copyrights in appropriate circumstances.
              </p>
            </section>

            <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm">
                <strong>Note:</strong> Misrepresentations in a DMCA notice or
                counter-notice may result in liability for damages, including
                costs and attorney fees. Please consult with a legal advisor
                before filing a DMCA notice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
