import "./globals.css";
import { Montserrat } from "next/font/google";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tahani Next Js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
