import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthSessionProvider from "@/components/providers/SessionProvider";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hajwairi Trading Co. W.L.L.",
  description: 
    "Fresh Fruits, Vegetables, Grocery & Daily Essentials Delivered Across Bahrain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <Navbar />

          {children}

          <Footer />        
        </AuthSessionProvider>
      </body>
    </html>
  );
}