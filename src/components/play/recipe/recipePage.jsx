"use client";

import React, { useState } from "react";
import styles from "./recipePage.module.css";

const tabs = [
  { key: "all", label: "전체" },
  { key: "chef", label: "셰프 & 파티시에" },
  { key: "barista", label: "바리스타 & 바텐더" },
  { key: "artist", label: "아티스트" },
  { key: "influencer", label: "인플루언서" },
];

const recipesData = [
  {
    id: 1,
    category: "artist",
    img: "/images/promotion/recipe1.png",
    title: "AI Artist Inspired by Ice Cream",
    subTitle: "AI 아티스트가 그린 아이스크림 나라",
  },
  {
    id: 2,
    category: "artist",
    img: "/images/promotion/recipe2.png",
    title: "Metaverse Ice Cream",
    subTitle: "메타버스 아이스크림",
  },
  {
    id: 3,
    category: "artist",
    img: "/images/promotion/recipe3.png",
    title: "Dancing with Ice Cream",
    subTitle: "아이스크림과 함께 춤을",
  },
  {
    id: 4,
    category: "artist",
    img: "/images/promotion/recipe4.png",
    title: "Ice Cream Flower",
    subTitle: "꽃으로 표현한 아이스크림",
  },
  {
    id: 5,
    category: "artist",
    img: "/images/promotion/recipe5.png",
    title: "A Spring Garden",
    subTitle: "봄의 정원",
  },
  {
    id: 6,
    category: "artist",
    img: "/images/promotion/recipe6.png",
    title: "Sweet Devil Sprites",
    subTitle: "아이스크림 속 작은 악마들",
  },
];

export default function RecipePage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredRecipes =
    activeTab === "all"
      ? recipesData
      : recipesData.filter((recipe) => recipe.category === activeTab);

  return (
    <div className={styles.container}>
      <h1 className={styles.titleMain}>BR Recipe</h1>
      <p className={styles.titleSub}>
        다양한 전문가들이 제안하는 배라 행복레시피
      </p>

      <div className={styles.tabsWrapper}>
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.tabButton} ${
              activeTab === key ? styles.active : ""
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.recipeGrid}>
        {filteredRecipes.map(({ id, img, title, subTitle }) => (
          <div key={id} className={styles.recipeCard}>
            <img src={img} alt={title} className={styles.recipeImage} />
            <div className={styles.recipeText}>
              <div className={styles.categoryLabel}>아티스트</div>
              <h3 className={styles.recipeTitle}>{title}</h3>
              <p className={styles.recipeSubTitle}>{subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageBtn} disabled>
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`${styles.pageBtn} ${
              num === 1 ? styles.activePage : ""
            }`}
          >
            {num}
          </button>
        ))}
        <button className={styles.pageBtn}>&gt;</button>
      </div>
    </div>
  );
}
