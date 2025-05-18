"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/mainpage/promotion.css";

export default function PromotionSection() {
  const swiperRef = useRef(null);

  const allPromotions = [
    { id: 1, image: "/images/main/promo1.png" },
    { id: 2, image: "/images/main/promo2.png" },
    { id: 3, image: "/images/main/promo3.png" },
    { id: 4, image: "/images/main/promo4.png" },
    { id: 5, image: "/images/main/promo5.png" },
    { id: 6, image: "/images/main/promo6.png" },
    { id: 7, image: "/images/main/promo7.png" },
    { id: 8, image: "/images/main/promo8.png" },
    { id: 9, image: "/images/main/promo9.png" },
    { id: 10, image: "/images/main/promo10.png" },
    { id: 11, image: "/images/main/promo11.png" },
    { id: 12, image: "/images/main/promo12.png" },
  ];

  // 슬라이드별 데이터 구성
  const promotions = [
    // 첫 번째 슬라이드: 1~5번 카드
    allPromotions.slice(0, 5),
    // 두 번째 슬라이드: 6~10번 카드
    allPromotions.slice(5, 10),
    // 세 번째 슬라이드: 8~10번 + 11~12번 카드 (총 5개)
    [...allPromotions.slice(7, 10), ...allPromotions.slice(10, 12)],
  ];

  const promo_date = [
    "2025-05-15 ~ 2025-05-18",
    "2025-05-16 ~ 2025-05-22",
    "2025-05-14 ~ 2025-05-20",
    "2025-05-01 ~ 소진 시 까지",
    "2025-05-14 ~ 2025-05-18",
    "2025-05-20 ~ 2025-05-25",
    "2025-05-18 ~ 2025-05-24",
    "2025-05-16 ~ 2025-05-22",
    "2025-05-19 ~ 2025-05-30",
    "2025-05-15 ~ 소진 시 까지",
    "2025-05-22 ~ 2025-05-28",
    "2025-05-20 ~ 2025-05-26",
  ];
  
  const promo_text = [
    "그래이맛 콘테스트 1차 투표! TOP7을 뽑아주세요!",
    "젤리곰 무드등 세트 사전예약 시 2천원 할인!",
    "우석이 디지털 굿즈 2차",
    "해피볼 티니핑 프린세스 랜덤 피규어",
    "해피포인트 페스티벌 최대 50% OFF!",
    "신상품 출시 기념 특가 이벤트",
    "멤버십 회원 전용 할인 혜택",
    "여름 시즌 한정 콜라보 상품",
    "포인트 적립 2배 이벤트",
    "친구 추천하고 쿠폰 받기",
    "생일 축하 스페셜 기프트",
    "월말 정산 세일 최대 70% 할인",
  ];

  const handleCardClick = (promoId) => {
    // 각 카드별 링크 처리
    window.open(`/promotion/${promoId}`, "_blank");
  };

  return (
    <div className="promotion-container">
      <div className="promotion-inner">
        <div className="promotion-header">
          <span className="main-header__text">Promotion</span>
          <p className="main-header__description">
            배라의 다양한 혜택과 이벤트를 만나보세요
          </p>
        </div>

        <div className="promotion-swiper-container">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            pagination={{
              el: ".promotion-swiper-container .swiper-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className="promotion-swiper"
            loop={false}
            allowTouchMove={true}
            simulateTouch={true}
            touchMoveStopPropagation={false}
          >
            {promotions.map((slidePromotions, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="promotion-slide-content">
                  <div className="promotion-slider">
                    {slidePromotions.map((promo, cardIndex) => {
                      const originalIndex = promo.id - 1;

                      return (
                        <div
                          key={promo.id}
                          className="promotion-card"
                          onClick={() => handleCardClick(promo.id)}
                        >
                          <div className="promotion-image">
                            <img
                              src={promo.image}
                              alt={`프로모션 ${promo.id}`}
                            />
                          </div>
                          <p className="promotion-period">
                            {promo_date[originalIndex]}
                          </p>
                          <p className="promotion-title">
                            {promo_text[originalIndex]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
