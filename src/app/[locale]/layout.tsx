import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter_Tight } from 'next/font/google'
import Navbar from "@/src/components/Navbar";



const interTight = Inter_Tight({ subsets: ['latin'] })

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



export const metadata: Metadata = {
  metadataBase: new URL('https://alvinpratama.com'),
  title: {
    default: 'Alvin Pratama',
    template: '%s | Alvin Pratama',
  },
  description: 'Software Engineer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Alvin Pratama',
  },
}

interface RootLayout {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayout>) {
  return (
    <html
      className={interTight.className}
      lang={locale}>
      <body>
        {/* <main className='mx-auto flex min-h-screen max-w-[1280px] flex-col flex-wrap gap-10 px-6 md:py-12 py-4 md:gap-16'> */}
        <main>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
