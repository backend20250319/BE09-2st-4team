"use client";

import "@/styles/mainpage/promotion.css";

export default function PromotionSection() {
  const promotions = [
    {
      id: 1,
      image: "/images/main/promo1.png",
    },
    {
      id: 2,
      image: "/images/main/promo2.png",
    },
    {
      id: 3,
      image: "/images/main/promo3.png",
    },
    {
      id: 4,
      image: "/images/main/promo4.png",
    },
    {
      id: 5,
      image: "/images/main/promo5.png",
    },
  ];
  const promo_date = [
    "2025-05-15 ~ 2025-05-18",
    "2025-05-16 ~ 2025-05-22",
    "2025-05-14 ~ 2025-05-20",
    "2025-05-01 ~ 소진 시 까지",
    "2025-05-14 ~ 2025-05-18",
  ];

  const promo_text = [
    "그래이맛 콘테스트 1차 투표! TOP7을 뽑아주세요!",
    "젤리곰 무드등 세트 사전예약 시 2천원 할인!",
    "우석이 디지털 굿즈 2차",
    "해피볼 티니핑 프린세스 랜덤 피규어",
    "해피포인트 페스티벌 최대 50% OFF!",
  ];

  return (
    <div className="promotion-container">
      <div className="promotion-inner">
        <div className="promotion-header">
          <span className="main-header__text">Promotion</span>
          <p className="main-header__description">
            배라의 다양한 혜택과 이벤트를 만나보세요
          </p>
        </div>

        <div className="promotion-slider-container">
          <div className="promotion-slider">
            {promotions.map((promo, index) => (
              <div key={promo.id} className="promotion-card">
                <div className="promotion-image">
                  <img src={promo.image} alt={`프로모션 ${promo.id}`} />
                </div>
                <p className="promotion-period">{promo_date[index]}</p>
                <p className="promotion-title">{promo_text[index]}</p>
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
    </div>
  );
}
