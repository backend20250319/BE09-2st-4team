"use client"; // Next.js 13 이상에서 클라이언트 컴포넌트임을 명시

import { useState, useEffect } from "react";
import BannerSlider from "../components/mainpage/BannerSilider.jsx";
import "../styles/mainpage/main.css"; // 메인 페이지 스타일 import

export default function Home() {
  return (
    <main className="home-container">
      {/* 메인 슬라이더/캐러셀 */}
      <section className="main-slider-section">
        <BannerSlider />
      </section>

      {/* 프로모션 및 이벤트 섹션 */}
      <section className="promotion-section">
        <h2 className="section-title">배라의 다양한 혜택과 이벤트</h2>
        <div className="events-container">
          {/* 이벤트 카드들이 들어갈 자리 */}
        </div>
      </section>

      {/* 신제품 소개 섹션 */}
      <section className="new-products-section">
        <h2 className="section-title">새로 나온 배라의 신제품</h2>
        <div className="products-slider">{/* 제품 카드들이 들어갈 자리 */}</div>
      </section>

      {/* 브랜드 스토리 및 사회공헌 섹션 */}
      <section className="brand-section">
        <h2 className="section-title">배라와 함께하는 가치 있는 같이</h2>
        {/* 브랜드 스토리 내용 */}
      </section>

      {/* 매장 찾기 섹션 */}
      <section className="store-finder-section">
        <h2 className="section-title">내 주변 가까운 배스킨라빈스 매장</h2>
        {/* 매장 찾기 UI */}
      </section>
    </main>
  );
}
