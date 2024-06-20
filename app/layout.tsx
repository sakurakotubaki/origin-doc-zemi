import type { Metadata } from "next";
import { M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const m_PLUS_1_Code = M_PLUS_1_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ORIGIN Doc ゼミ",
  description: "学習塾のウェブサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1_Code.className}>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  );
}
