"use client";
import React, { useState } from "react";
// import "./../src/styles/flavorpage.css";
import "../styles/flavorpage.css";

// 샘플 데이터
const flavorHistoryData = [
  {
    id: 1,
    year: 2025,
    month: 1,
    name: "춘식이의 고구마맘!!",
    bgColor: "#EADCBE",
    img: "/images/flavors/2025-01.png",
  },
  {
    id: 2,
    year: 2025,
    month: 2,
    name: "아이스 초코 도쿄바나나",
    bgColor: "#6B3F2D",
    img: "/images/flavors/2025-02.png",
  },
  {
    id: 3,
    year: 2025,
    month: 3,
    name: "말랑 딸기 찹쌀떡",
    bgColor: "#F1C8C0",
    img: "/images/flavors/2025-03.png",
  },
  {
    id: 4,
    year: 2025,
    month: 4,
    name: "아이스 그린티 킷캣",
    bgColor: "#C6E3A7",
    img: "/images/flavors/2025-04.png",
  },
  // … 추가 데이터
];

export default function FlavorPage() {
  const [viewMode, setViewMode] = useState("year");
  const [selectedYear, setSelectedYear] = useState(2025);

  const years = Array.from(new Set(flavorHistoryData.map((f) => f.year))).sort(
    (a, b) => b - a
  );
  const items = flavorHistoryData.filter((f) => f.year === selectedYear);

  return (
    <div className="flavor-page">
      <nav className="breadcrumb">
        <a href="/brand-story">브랜드 스토리</a>
        <span>｜</span>
        <a href="/flavor-history" className="active">
          이달의 맛 히스토리
        </a>
        <span>｜</span>
        <a href="/be-better">Be Better</a>
      </nav>

      <h1 className="title">이달의 맛 히스토리</h1>
      <p className="subtitle">
        일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리
      </p>

      <div className="switch-container">
        <button
          className={viewMode === "year" ? "selected-button" : ""}
          onClick={() => setViewMode("year")}
        >
          연도별 보기
        </button>
        <button
          className={viewMode === "theme" ? "selected-button" : ""}
          onClick={() => setViewMode("theme")}
        >
          테마별 보기
        </button>
      </div>

      {viewMode === "year" && (
        <div className="year-nav">
          {years.map((y) => (
            <span
              key={y}
              className={y === selectedYear ? "selected-year" : ""}
              onClick={() => setSelectedYear(y)}
            >
              {y}
            </span>
          ))}
        </div>
      )}

      <div className="card-grid">
        {items.map((f) => (
          <div
            key={f.id}
            className="card"
            style={{ backgroundColor: f.bgColor }}
          >
            <img src={f.img} alt={f.name} className="card-image" />
            <div className="card-info">
              <div className="month-label">{f.month}월</div>
              <div className="flavor-name">{f.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
