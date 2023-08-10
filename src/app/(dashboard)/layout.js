import Image from "next/image";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devs Tasks",
  description: "Developer skill update app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
