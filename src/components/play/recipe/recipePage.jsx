"use client";

import React, { useState, useEffect } from "react";
import Tabs from "../br_play/Tabs";
import styles from "./recipePage.module.css";

// 탭 항목
const tabs = [
  { key: "all", label: "전체" },
  { key: "chef", label: "셰프 & 파티시에" },
  { key: "barista", label: "바리스타 & 바텐더" },
  { key: "artist", label: "아티스트" },
  { key: "influencer", label: "인플루언서" },
];

// key → label 매핑
const categoryMap = tabs.reduce((map, tab) => {
  map[tab.key] = tab.label;
  return map;
}, {});

// 레시피 데이터
const recipesData = [
  {
    id: 1,
    category: "artist",
    img: "/images/promotion/recipe1.png",
    title: "AI Artist Inspired by Ice Cream",
    subTitle: "AI 아티스트가 그린 아이스크림 나라",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=78&category=ALL&page=1",
  },
  {
    id: 2,
    category: "artist",
    img: "/images/promotion/recipe2.png",
    title: "Metaverse Ice Cream",
    subTitle: "메타버스 아이스크림",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=77&category=ALL&page=1",
  },
  {
    id: 3,
    category: "artist",
    img: "/images/promotion/recipe3.png",
    title: "Dancing with Ice Cream",
    subTitle: "아이스크림과 함께 춤을",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=77&category=ALL&page=1",
  },
  {
    id: 4,
    category: "artist",
    img: "/images/promotion/recipe4.png",
    title: "Ice Cream Flower",
    subTitle: "꽃으로 표현한 아이스크림",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=74&category=ALL&page=1",
  },
  {
    id: 5,
    category: "artist",
    img: "/images/promotion/recipe5.png",
    title: "A Spring Garden",
    subTitle: "봄의 정원",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=73&category=ALL&page=1",
  },
  {
    id: 6,
    category: "artist",
    img: "/images/promotion/recipe6.png",
    title: "Sweet Devil Sprites",
    subTitle: "아이스크림 속 작은 악마들",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/recipe/view.php?seq=72&category=ALL&page=1",
  },
  {
    id: 7,
    category: "artist",
    img: "/images/promotion/recipe7.png",
    title: "Enjoy Your Book with Ice Cream",
    subTitle: "책과 곁들이기 좋은 아이스크림",
  },
  {
    id: 8,
    category: "artist",
    img: "/images/promotion/recipe8.png",
    title: "Play The Flavor",
    subTitle: "플레이버 플레이리스트",
  },
  {
    id: 9,
    category: "artist",
    img: "/images/promotion/recipe9.png",
    title: "When Ice Cream Meets LP Record",
    subTitle: "아이스크림이 LP 앨범을 만났을 때",
  },
  {
    id: 10,
    category: "artist",
    img: "/images/promotion/recipe10.png",
    title: "Still Life with Ice Cream",
    subTitle: "아이스크림으로 그린 정물화",
  },
  {
    id: 11,
    category: "influencer",
    img: "/images/promotion/recipe11.png",
    title: "Ice Cream at Your Front Door",
    subTitle: "배달로 즐기는 아이스크림",
  },
  {
    id: 12,
    category: "chef",
    img: "/images/promotion/recipe12.png",
    title: "Baked",
    subTitle: "베이크드 알래스카",
  },
  {
    id: 13,
    category: "chef",
    img: "/images/promotion/recipe13.png",
    title: "Pina Colada\nParfait",
    subTitle: "피나콜라다 파르페",
  },
  {
    id: 14,
    category: "chef",
    img: "/images/promotion/recipe14.png",
    title: "Charcoal-flavored\nCaramel Ice Cream",
    subTitle: "참숯 카라멜 아이스크림",
  },
  {
    id: 15,
    category: "chef",
    img: "/images/promotion/recipe15.png",
    title: "Extra Virgin Olive Oil\nIce Cream",
    subTitle: "엑스트라 버진 올리브 오일 아이스크림",
  },
  {
    id: 16,
    category: "chef",
    img: "/images/promotion/recipe16.png",
    title: "Dacquoise Ice Cream\nSand",
    subTitle: "다쿠아즈 아이스크림 샌드",
  },
  {
    id: 17,
    category: "chef",
    img: "/images/promotion/recipe17.png",
    title: "Red King Crab\nCitrus",
    subTitle: "레드 킹크랩 시트러스",
  },
  {
    id: 18,
    category: "chef",
    img: "/images/promotion/recipe18.png",
    title: "New York Cheese\nPasta",
    subTitle: "뉴욕 치즈 파스타",
  },
  {
    id: 19,
    category: "barista",
    img: "/images/promotion/recipe19.png",
    title: "My Dear Friend Rainbow",
    subTitle: "언제 봐도 반가운 레인보우",
  },
  {
    id: 20,
    category: "barista",
    img: "/images/promotion/recipe20.png",
    title: "A Harmonious Cheesecake",
    subTitle: "하하호호 화목한 치즈케이크",
  },
  {
    id: 21,
    category: "바리스타 & 바텐더",
    img: "/images/promotion/recipe21.png",
    title: "Oreohopper",
    subTitle: "오레오호퍼",
  },
  {
    id: 22,
    category: "barista",
    img: "/images/promotion/recipe22.png",
    title: "Rainbow Bubble",
    subTitle: "레인보우 버블",
  },
  {
    id: 23,
    category: "barista",
    img: "/images/promotion/recipe23.png",
    title: "Raspberry Paradise",
    subTitle: "라즈베리 파라다이스",
  },
  {
    id: 24,
    category: "barista",
    img: "/images/promotion/recipe24.png",
    title: "Bourbon Bacon Bon Bon",
    subTitle: "버번 베이컨 봉봉",
  },
  {
    id: 25,
    category: "influencer",
    img: "/images/promotion/recipe25.png",
    title: "Vanilla & Olive Oil",
    subTitle: "바닐라와 올리브 오일",
  },
  {
    id: 26,
    category: "influencer",
    img: "/images/promotion/recipe26.png",
    title: "Ice Cream Sand",
    subTitle: "아이스크림 샌드",
  },
  {
    id: 27,
    category: "influencer",
    img: "/images/promotion/recipe27.png",
    title: "Elvis´s Favorite Vanilla Almond Fudge",
    subTitle: "엘비스가 사랑한 바닐라 아몬드 퍼지",
  },
  {
    id: 28,
    category: "influencer",
    img: "/images/promotion/recipe28.png",
    title: "Gluten-free Organic Chocolate Holic",
    subTitle: "글루텐프리 유기농 초코홀릭",
  },
  {
    id: 29,
    category: "influencer",
    img: "/images/promotion/recipe29.png",
    title: "Najubae Shake",
    subTitle: "나주배 쉐이크",
  },
  {
    id: 30,
    category: "influencer",
    img: "/images/promotion/recipe30.png",
    title: "Vegan Strawberry Ice Cream",
    subTitle: "비건 딸기 아이스크림",
  },
];

export default function RecipePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 필터링
  const filteredRecipes =
    activeTab === "all"
      ? recipesData
      : recipesData.filter((recipe) => recipe.category === activeTab);

  // 페이지 초기화 (탭 변경 시)
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedRecipes = filteredRecipes.slice(startIdx, endIdx);

  return (
    <div className={styles.container}>
      <h1 className={styles.titleMain}>BR Recipe</h1>
      <p className={styles.titleSub}>
        다양한 전문가들이 제안하는 배라 행복레시피
      </p>

      {/* 탭 영역 */}
      <div className={styles.tabsWrapper}>
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      {/* 레시피 카드 목록 */}
      <div className={styles.recipeGrid}>
        {paginatedRecipes.map(
          ({ id, img, title, subTitle, category, externalLink }) => {
            const cardContent = (
              <div className={styles.recipeCard}>
                <img src={img} alt={title} className={styles.recipeImage} />
                <div className={styles.recipeText}>
                  <div className={styles.categoryLabel}>
                    {categoryMap[category] || category}
                  </div>
                  <h3 className={styles.recipeTitle}>{title}</h3>
                  <p className={styles.recipeSubTitle}>{subTitle}</p>
                </div>
              </div>
            );

            return externalLink ? (
              <a
                key={id}
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {cardContent}
              </a>
            ) : (
              <div key={id}>{cardContent}</div>
            );
          }
        )}
      </div>

      {/* 페이지네이션 */}
      <div className={styles.pagination}>
        <button
          className={styles.pageBtn}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`${styles.pageBtn} ${
                pageNum === currentPage ? styles.activePage : ""
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className={styles.pageBtn}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
