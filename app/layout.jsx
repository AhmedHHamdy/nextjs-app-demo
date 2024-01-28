import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorials and courses",
  keywords: "web development, web design"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
