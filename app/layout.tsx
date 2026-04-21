import type { Metadata } from "next";
import { Courier_Prime, Raleway } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const courierPrime = Courier_Prime({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

const raleway = Raleway({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Rish Khurana",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${raleway.variable}`}>
      <body>
        <header>Rish Khurana</header>
        <div className="layout">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
