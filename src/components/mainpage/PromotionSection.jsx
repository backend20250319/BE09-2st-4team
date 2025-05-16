"use client";

import "@/styles/mainpage/promotion.css";

export default function PromotionSection() {
  // 프로모션 데이터
  const promotions = [
    {
      id: 1,
      image: "/images/main/promo1.png",
      period: "2023.04.24 - 2023.05.31",
      title: "핑크곰과 함께 4월 인증샷 올리면 +400원",
    },
    {
      id: 2,
      image: "/images/main/promo2.png",
      period: "2023.04.24 - 2023.05.31",
      title: "1월 아이스크림 케이크의 다양한 혜택",
    },
    {
      id: 3,
      image: "/images/main/promo3.png",
      period: "2023.04.24 - 2023.05.31",
      title: "1월 디저트 및 음료+케익 세트 혜택",
    },
    {
      id: 4,
      image: "/images/main/promo4.png",
      period: "2023.04.24 - 2023.05.31",
      title: "T 스타존 드라이브 배스킨라빈스 1,000원 더하면 더 받자!",
    },
    {
      id: 5,
      image: "/images/main/promo5.png",
      period: "2023.04.24 - 상시",
      title: "배달의 배스킨라빈스 그렇게 많은 이용이 또 처음",
    },
  ];

  return (
    <div className="promotion-container">
      <div className="promotion-header">
        <span className="main-header__text">Promotion</span>
        <p className="main-header__description">
          배라의 다양한 혜택과 이벤트를 만나보세요
        </p>
      </div>

      <div className="promotion-slider-container">
        <div className="promotion-slider">
          {promotions.map((promo) => (
            <div key={promo.id} className="promotion-card">
              <div className="promotion-image">
                <img src={promo.image} alt={promo.title} />
              </div>
              <div className="promotion-period">{promo.period}</div>
              <div className="promotion-title">{promo.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="promotion-navigation">
        <span className="promotion-dot"></span>
        <span className="promotion-dot"></span>
        <span className="promotion-dot active"></span>
      </div>
    </div>
  );
}
