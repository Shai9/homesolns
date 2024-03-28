import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "FixItNow",
  description: "Your go-to platform for seamless access to vetted professionals offering comprehensive home solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-6 md:mx-16">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
