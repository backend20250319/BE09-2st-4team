"use client";

import React, { useState, useEffect } from "react";
import FlavorPage from "@/components/story/flavor/FlavorPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/styles/story/flavorpage/flavorpage.css";

const YEAR_IMAGES = {
  2025: [
    "/images/story/FlavorPage/25-1.png",
    "/images/story/FlavorPage/25-2.png",
    "/images/story/FlavorPage/25-3.png",
    "/images/story/FlavorPage/25-4.png",
  ],
  2024: [
    "/images/story/FlavorPage/24-1.jpg",
    "/images/story/FlavorPage/24-2.jpg",
    "/images/story/FlavorPage/24-3.jpg",
    "/images/story/FlavorPage/24-4.jpg",
    "/images/story/FlavorPage/24-5.jpg",
    "/images/story/FlavorPage/24-6.png",
    "/images/story/FlavorPage/24-7.png",
    "/images/story/FlavorPage/24-8.png",
    "/images/story/FlavorPage/24-9.png",
    "/images/story/FlavorPage/24-10.png",
    "/images/story/FlavorPage/24-11.png",
    "/images/story/FlavorPage/24-12.png",
  ],
  2023: [
    "/images/story/FlavorPage/23-1.jpg",
    "/images/story/FlavorPage/23-2.jpg",
    "/images/story/FlavorPage/23-3.jpg",
    "/images/story/FlavorPage/23-4.jpg",
    "/images/story/FlavorPage/23-5.jpg",
    "/images/story/FlavorPage/23-6.jpg",
    "/images/story/FlavorPage/23-7.jpg",
    "/images/story/FlavorPage/23-8.jpg",
    "/images/story/FlavorPage/23-9.png",
    "/images/story/FlavorPage/23-10.png",
    "/images/story/FlavorPage/23-11.jpg",
    "/images/story/FlavorPage/23-12.jpg",
  ],
  2022: [
    "/images/story/FlavorPage/22-1.jpg",
    "/images/story/FlavorPage/22-2.jpg",
    "/images/story/FlavorPage/22-3.jpg",
    "/images/story/FlavorPage/22-4.jpg",
    "/images/story/FlavorPage/22-5.jpg",
    "/images/story/FlavorPage/22-6.jpg",
    "/images/story/FlavorPage/22-7.jpg",
    "/images/story/FlavorPage/22-8.jpg",
    "/images/story/FlavorPage/22-9.jpg",
    "/images/story/FlavorPage/22-10.jpg",
    "/images/story/FlavorPage/22-11.jpg",
    "/images/story/FlavorPage/22-12.jpg",
  ],
  2021: [
    "/images/story/FlavorPage/21-1.jpg",
    "/images/story/FlavorPage/21-2.jpg",
    "/images/story/FlavorPage/21-3.jpg",
    "/images/story/FlavorPage/21-4.jpg",
    "/images/story/FlavorPage/21-5.jpg",
    "/images/story/FlavorPage/21-6.jpg",
    "/images/story/FlavorPage/21-7.jpg",
    "/images/story/FlavorPage/21-8.jpg",
    "/images/story/FlavorPage/21-9.jpg",
    "/images/story/FlavorPage/21-10.jpg",
    "/images/story/FlavorPage/21-11.jpg",
    "/images/story/FlavorPage/21-12.jpg",
  ],
  2020: [
    "/images/story/FlavorPage/20-1.jpg",
    "/images/story/FlavorPage/20-2.jpg",
    "/images/story/FlavorPage/20-3.jpg",
    "/images/story/FlavorPage/20-4.jpg",
    "/images/story/FlavorPage/20-5.jpg",
    "/images/story/FlavorPage/20-6.jpg",
    "/images/story/FlavorPage/20-7.jpg",
    "/images/story/FlavorPage/20-8.jpg",
    "/images/story/FlavorPage/20-9.jpg",
    "/images/story/FlavorPage/20-10.jpg",
    "/images/story/FlavorPage/20-11.jpg",
    "/images/story/FlavorPage/20-12.jpg",
  ],
  2019: [
    "/images/story/FlavorPage/19-1.jpg",
    "/images/story/FlavorPage/19-2.jpg",
    "/images/story/FlavorPage/19-3.jpg",
    "/images/story/FlavorPage/19-4.jpg",
    "/images/story/FlavorPage/19-5.jpg",
    "/images/story/FlavorPage/19-6.jpg",
    "/images/story/FlavorPage/19-7.jpg",
    "/images/story/FlavorPage/19-8.jpg",
    "/images/story/FlavorPage/19-9.jpg",
    "/images/story/FlavorPage/19-10.jpg",
    "/images/story/FlavorPage/19-11.jpg",
    "/images/story/FlavorPage/19-12.jpg",
  ],
  2018: [
    "/images/story/FlavorPage/18-1.jpg",
    "/images/story/FlavorPage/18-2.jpg",
    "/images/story/FlavorPage/18-3.jpg",
    "/images/story/FlavorPage/18-4.jpg",
    "/images/story/FlavorPage/18-5.jpg",
    "/images/story/FlavorPage/18-6.jpg",
    "/images/story/FlavorPage/18-7.jpg",
    "/images/story/FlavorPage/18-8.jpg",
    "/images/story/FlavorPage/18-9.jpg",
    "/images/story/FlavorPage/18-10.jpg",
    "/images/story/FlavorPage/18-11.jpg",
    "/images/story/FlavorPage/18-12.jpg",
  ],
};

export default function HistoryPage() {
  const years = Object.keys(YEAR_IMAGES).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState("2025");
  const router = useRouter();

  useEffect(() => {
    const storedYear = sessionStorage.getItem("selectedYear");
    if (storedYear) {
      setSelectedYear(storedYear);
    }

    const footerLinks = document.querySelectorAll(".br-footer-link-item");
    footerLinks.forEach((item) => {
      if (item.textContent.includes("Be Better")) {
        item.addEventListener("click", () => {
          router.push("/bebetter");
        });
      }
    });
  }, [router]);

  const goToYear2025 = () => {
    sessionStorage.setItem("selectedYear", "2025");
    window.location.reload();
  };

  return (
    <main className="flavor-history-page">
      <div className="breadcrumb">
        <Link href="/story/brandhistory" className="breadcrumbbar">
          브랜드 스토리
        </Link>
        <span className="divider">|</span>
        <span
          className="breadcrumbbar"
          onClick={goToYear2025}
          style={{
            cursor: "pointer",
            fontWeight: selectedYear === "2025" ? "bold" : "normal",
          }}
        >
          이달의 맛 히스토리
        </span>
        <span className="divider">|</span>
        <Link
          href="/story/bebetter"
          className="breadcrumbbar"
          style={{ textDecoration: "none" }}
        >
          Be Better
        </Link>
      </div>

      <h1 className="page-title">이달의 맛 히스토리</h1>
      <p className="page-desc">
        일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리
      </p>

      <div className="tabs">
        <Link href="/story/history">
          <button className="tab active">연도별 보기</button>
        </Link>
        <Link href="/story/historythema">
          <button className="tab ">테마별 보기</button>
        </Link>
      </div>

      <ul className="year-list with-dividers">
        {years.map((year, index) => (
          <li
            key={year}
            className={year === selectedYear ? "active-year" : ""}
            onClick={() => {
              sessionStorage.setItem("selectedYear", year);
              setSelectedYear(year);
            }}
          >
            {year}
            {index !== years.length - 1 && <span className="divider1">|</span>}
          </li>
        ))}
      </ul>

      <div className="flavor-grid">
        {YEAR_IMAGES[selectedYear].map((src, idx) => (
          <FlavorPage
            key={src}
            image={src}
            link={`/flavor/history/${selectedYear}/${idx + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
