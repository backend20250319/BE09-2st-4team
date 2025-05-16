"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/menu/icecreampage.css";

export default function MenuLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="icecream-page">
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <Link
              href="/menu/thismonth"
              className={
                pathname === "/menu/thismonth" ? "nav-link active" : "nav-link"
              }
            >
              이달의 맛
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu"
              className={pathname === "/menu" ? "nav-link active" : "nav-link"}
            >
              아이스크림
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu/prepack"
              className={
                pathname === "/menu/prepack" ? "nav-link active" : "nav-link"
              }
            >
              프리팩
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu/icecreamcake"
              className={
                pathname === "/menu/icecreamcake"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              아이스크림케이크
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu/dessert"
              className={
                pathname === "/menu/dessert" ? "nav-link active" : "nav-link"
              }
            >
              디저트
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu/beverage"
              className={
                pathname === "/menu/beverage" ? "nav-link active" : "nav-link"
              }
            >
              음료
            </Link>
          </li>
          <li>
            <span className="nav-divider">|</span>
          </li>
          <li>
            <Link
              href="/menu/coffee"
              className={
                pathname === "/menu/coffee" ? "nav-link active" : "nav-link"
              }
            >
              커피
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
