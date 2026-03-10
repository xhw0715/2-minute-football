import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "2 Minute Football - Play Online Free | Unblocked Sports Game",
  description:
    "Play 2 Minute Football online for free! Step into the cleats of a star quarterback and lead your team to victory in this fast-paced sports game. No downloads required!",
  keywords: [
    "2 minute football",
    "football game",
    "sports game",
    "quarterback game",
    "free games",
    "online games",
    "unblocked games",
    "american football",
  ],
  authors: [{ name: "2 Minute Football" }],
  openGraph: {
    title: "2 Minute Football - Play Online Free | Unblocked Sports Game",
    description:
      "Play 2 Minute Football online for free! Step into the cleats of a star quarterback and lead your team to victory.",
    url: "https://2minutefootball.com",
    siteName: "2 Minute Football",
    type: "website",
    images: [
      {
        url: "/game_images/2-minute-football.webp",
        width: 1200,
        height: 630,
        alt: "2 Minute Football Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Minute Football - Play Online Free | Unblocked Sports Game",
    description:
      "Play 2 Minute Football online for free! Step into the cleats of a star quarterback and lead your team to victory.",
    images: ["/game_images/2-minute-football.webp"],
  },
  alternates: {
    canonical: "https://2minutefootball.com",
  },
  icons: {
    icon: "/game_images/2-minute-football.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/game_images/2-minute-football.webp" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLY39Z34JP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLY39Z34JP');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
