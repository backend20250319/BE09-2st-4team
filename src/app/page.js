"use client";

import { useState, useEffect } from "react";
import BannerSlider from "../components/mainpage/BannerSilider.jsx";
import PromotionSection from "../components/mainpage/PromotionSection.jsx";
import NewItemSection from "@/components/mainpage/NewItemSection.jsx";
import BRPlaySection from "@/components/mainpage/BrPlay.jsx";
import BeBetterSection from "@/components/mainpage/BeBetter.jsx";
import "../styles/mainpage/main.css";

export default function Home() {
  return (
    <main className="home-container">
      {/* 메인 슬라이더 */}
      <section className="main-slider-section">
        <BannerSlider />
      </section>

      {/* 프로모션 및 이벤트 섹션 */}
      <PromotionSection />

      {/* 신제품 소개 섹션 */}
      <section className="new-products-section">
        <div className="products-slider">
          <NewItemSection />
        </div>
      </section>

      {/* 브랜드 스토리 및 사회공헌 섹션 */}
      <section className="brand-section">
        <BRPlaySection />
      </section>

      {/* 캠페인 섹션 */}
      <section className="campaign-section">
        <BeBetterSection />
      </section>

      {/* 매장 찾기 섹션 */}
      <section className="store-finder-section">
        <h2 className="section-title">내 주변 가까운 배스킨라빈스 매장</h2>
        {/* 매장 찾기 UI */}
      </section>
    </main>
  );
}
