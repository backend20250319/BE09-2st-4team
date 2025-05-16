"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/flavorpage/flavorthemapage.css";

const CATEGORY_TABS = [
  {
    name: "배라이즈백",
    id: "back",
    icon: "/images/FlavorPage/icon_is_back.png",
  },
  {
    name: "레전더리플레이버",
    id: "legend",
    icon: "/images/FlavorPage/icon_legend.png",
  },
  {
    name: "그래미맛어워드",
    id: "grammy",
    icon: "/images/FlavorPage/icon_gray.png",
  },
  {
    name: "올해의플레이버",
    id: "flavoroftheyear",
    icon: "/images/FlavorPage/icon_gray.png",
  },
];

const CATEGORY_IMAGES = {
  back: [
    "/images/FlavorPage/bib-1.jpg",
    "/images/FlavorPage/bib-2.jpg",
    "/images/FlavorPage/bib-3.jpg",
    "/images/FlavorPage/bib-4.jpg",
    "/images/FlavorPage/bib-5.jpg",
    "/images/FlavorPage/bib-6.jpg",
    "/images/FlavorPage/bib-7.jpg",
    "/images/FlavorPage/bib-8.jpg",
    "/images/FlavorPage/bib-9.png",
  ],
  legend: ["/images/FlavorPage/Lf-1.jpg", "/images/FlavorPage/Lf-2.jpg"],
  grammy: [
    "/images/FlavorPage/gfa-1.jpg",
    "/images/FlavorPage/gfa-2.jpg",
    "/images/FlavorPage/gfa-3.jpg",
    "/images/FlavorPage/gfa-4.jpg",
    "/images/FlavorPage/gfa-5.jpg",
    "/images/FlavorPage/gfa-6.jpg",
    "/images/FlavorPage/gfa-7.jpg",
    "/images/FlavorPage/gfa-8.jpg",
  ],
  flavoroftheyear: [],
};

export default function HistoryThemaPage() {
  const [activeCategory, setActiveCategory] = useState("back");

  return (
    <main className="flavor-history-page">
      {/* breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumbbar">브랜드 스토리</span>
        <span className="divider">|</span>
        <span className="breadcrumbbar">이달의 맛 히스토리</span>
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

      {/* 탭 메뉴 */}
      <div className="tabs">
        <Link href="/story/history">
          <button className="tab">연도별 보기</button>
        </Link>
        <button className="tab active">테마별 보기</button>
      </div>

      {/* 카테고리 선택 */}
      <ul className="year-list with-dividers category-bar">
        {CATEGORY_TABS.map((cat, index) => {
          const isActive = cat.id === activeCategory;
          return (
            <li
              key={cat.id}
              className={`category-item ${isActive ? "active" : "inactive"}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <img
                src={cat.icon}
                alt={`${cat.name} 아이콘`}
                className={`category-icon ${!isActive ? "grayscale" : ""}`}
              />
              <span>{cat.name}</span>
              {index !== CATEGORY_TABS.length - 1 && (
                <span className="divider1">|</span>
              )}
            </li>
          );
        })}
      </ul>

      {/* 이미지 출력 */}
      <div className="flavor-grid">
        {CATEGORY_IMAGES[activeCategory].length > 0 ? (
          CATEGORY_IMAGES[activeCategory].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`theme-flavor-${idx}`}
              className="flavor-image"
            />
          ))
        ) : (
          <div className="no-data"></div>
        )}
      </div>
    </main>
  );
}
