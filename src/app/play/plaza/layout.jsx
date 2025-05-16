
// src/app/layout.js
import "@/styles/br_play_style/globals.css";
import Link from "next/link"; // Import Link from Next.js

export const metadata = {
  title: "Event Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* 상단 네비게이션 */}
        <nav className="nav">
          <Link href="/event" className="nav-item active">
            이벤트
          </Link>
          <div className="nav-sep">|</div>
          <Link href="/plaza" className="nav-item">
            베라광장
          </Link>
          <div className="nav-sep">|</div>
          <Link href="/recipe" className="nav-item">
            BR 레시피
          </Link>
          <div className="nav-sep">|</div>
          <Link href="/myflavor" className="nav-item">
            마이플레이버 리스트
          </Link>
        </nav>

        {/* 본문 */}
        <main className="container">{children}</main>

        {/* 하단 푸터 */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
