import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little Kitchen Morley | ⭐ 5-Star Taiwanese Bento | $10-20",
  description: "Authentic Taiwanese cuisine in Morley, Perth. 5-star rated on Hungry Panda & Google Maps. Beef brisket soup noodle, chicken chop bento & more. Open 11am-6pm, Closed Monday. Order now!",
  keywords: "Taiwanese food Morley, Asian restaurant Perth, beef brisket noodle, chicken chop bento, Taiwanese bento, Little Kitchen Perth, best Taiwanese food Perth",
  authors: [{ name: "Little Kitchen" }],
  openGraph: {
    title: "Little Kitchen Morley | 5-Star Taiwanese Bento",
    description: "Authentic Taiwanese cuisine. 5⭐ rating. Order delicious bento boxes now!",
    type: "website",
    locale: "en_AU",
    siteName: "Little Kitchen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Kitchen Morley | 5-Star Taiwanese Bento",
    description: "Authentic Taiwanese cuisine. 5⭐ rating. Order now!",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Poppins,sans-serif]">
        {children}
      </body>
    </html>
  );
}
