// src/app/layout.js
"use client";
import "@/styles/br_play_style/globals.css";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="icecream-page">
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <Link
              href="/play"
              className={pathname === "/play" ? "nav-link active" : "nav-link"}
            >
              이벤트
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/play/plaza"
              className={pathname === "/play/plaza" ? "nav-link active" : "nav-link"}
            >
              배라광장
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/play/recipe"
              className={pathname === "/play/recipe" ? "nav-link active" : "nav-link"}
            >
              BR 레시피
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/play/myflavor"
              className={pathname === "/play/myflavor" ? "nav-link active" : "nav-link"}
            >
              마이플레이버 리스트
            </Link>
          </li>
        </ul>
      </nav>

      {/* 본문 */}
      <main className="container">{children}</main>
    </div>
  );
}
