"use client";

import React, { useState } from "react";
import styles from "./myflavorPage.module.css";

const popularFlavors = [
  { id: 1, name: "엄마는 외계인", img: "/images/promotion/flavors1.png" },
  { id: 2, name: "아몬드 봉봉", img: "/images/promotion/flavors2.png" },
  { id: 3, name: "민트 초콜릿 칩", img: "/images/promotion/flavors3.png" },
  { id: 4, name: "뉴욕 치즈케이크", img: "/images/promotion/flavors4.png" },
  { id: 5, name: "체리쥬빌레", img: "/images/promotion/flavors5.png" },
  { id: 6, name: "레인보우 샤베트", img: "/images/promotion/flavors6.png" },
];

const sizes = [
  { id: 3, label: "3가지 맛(파인트)" },
  { id: 4, label: "4가지 맛(쿼터)" },
  { id: 5, label: "5가지 맛(패밀리)" },
  { id: 6, label: "6가지 맛(하프갤런)" },
];

export default function FlavorList() {
  const [selectedFlavors, setSelectedFlavors] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState(new Set());

  const handleFlavorClick = (id) => {
    const newSet = new Set(selectedFlavors);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedFlavors(newSet);
  };

  const handleSizeClick = (id) => {
    const newSet = new Set(selectedSizes);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedSizes(newSet);
  };

  const handleReset = () => {
    setSelectedFlavors(new Set());
    setSelectedSizes(new Set());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titleMain}>My Flavor List</h1>
      <p className={styles.titleSub}>
        내 맘대로 하는 맛조합! 나만의 플레이버 리스트를 만들어보세요!
        <br />
        센스있는 플레이버 리스트에게는 행운이 올지도 모른답니다!
      </p>

      <div className={styles.flavorCreationBox}>
        <div className={styles.flavorImages}>
          <img src="/images/promotion/myflavor1.png" alt="myflavor 1" />
        </div>
        <div className={styles.flavorText}>
          내맘대로 추천하는{" "}
          <b>
            나만의 <span className={styles.highlight}>맛조합</span> 만들기
          </b>
        </div>
        <button className={styles.participateBtn}>참여하기</button>
      </div>

      <div className={styles.tagSizeWrapper}>
        <div className={styles.tagLabel}>맛 태그</div>
        <button className={styles.tagButton}>특이한 맛들을 모아서</button>
      </div>

      {/* 인기 플레이버 */}
      <div className={styles.popularFlavorsWrapper}>
        <div className={styles.popularFlavorsInner}>
          <div className={styles.label}>인기 플레이버</div>
          <div className={styles.flavorList}>
            {popularFlavors.map(({ id, name, img }) => (
              <div
                key={id}
                className={`${styles.flavorItem} ${
                  selectedFlavors.has(id) ? styles.selected : ""
                }`}
                onClick={() => handleFlavorClick(id)}
              >
                <img src={img} alt={name} />
                <div className={styles.flavorName}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 사이즈 선택 */}
      <div className={styles.sizeSelectorWrapper}>
        <div className={styles.sizeLeft}>
          <div className={styles.label}>사이즈</div>
          <div className={styles.sizeButtons}>
            {sizes.map(({ id, label }) => (
              <button
                key={id}
                className={`${styles.sizeButton} ${
                  selectedSizes.has(id) ? styles.active : ""
                }`}
                onClick={() => handleSizeClick(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <button className={styles.resetButton} onClick={handleReset}>
          선택초기화
        </button>
      </div>

      <hr className={styles.separator} />

      <div className={styles.summary}>
        총{" "}
        <span className={styles.highlight}>{selectedFlavors.size}</span>개의
        플레이버와{" "}
        <span className={styles.highlight}>{selectedSizes.size}</span>개의
        사이즈가 선택되었습니다.
      </div>
    </div>
  );
}
