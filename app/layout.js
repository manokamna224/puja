import { Inter,Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/modules/footer/ui/footer";
import Navbar from "@/components/navbar";
import MobileFooter from "@/modules/footer/ui/mobile-footer";

export const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const PlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.className} ${PlayfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
