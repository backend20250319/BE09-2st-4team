import { Geist, Geist_Mono } from "next/font/google";
import "../styles/header.css";

import Header from "../components/Header";

export const metadata = {
  title: "배스킨라빈스",
  description: "프리미엄 아이스크림 브랜드",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
