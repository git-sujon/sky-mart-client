import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Sky Mart | Products",
  description: "Buy for happiness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
