import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book-INN",
  description: "A place where you can find your favorite books",
  image: "/og-image.png",
  url: "https://book-inn.vercel.app",
  type: "website",
  keywords: ["books", "reading", "library", "bookstore"],
  locale: "en",
  site_name: "Book-INN",
  email: "",


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
