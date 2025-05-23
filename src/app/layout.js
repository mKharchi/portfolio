import { Inter  , Jost, Work_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
})
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

export const metadata = {
  title: "Kharchi Merouane ",
  description: "created by kharchi merouane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
