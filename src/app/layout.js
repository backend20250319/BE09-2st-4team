
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/mainpage/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "배스킨라빈스",
  description: "프리미엄 아이스크림 브랜드",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=1280, user-scalable=no" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main
          style={{ paddingTop: "90px", minHeight: "60vh", background: "#fff" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
