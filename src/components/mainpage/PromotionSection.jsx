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
    { id: 1, image: "/images/main/promo1.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=345" },
    { id: 2, image: "/images/main/promo2.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=343" },
    { id: 3, image: "/images/main/promo3.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=341" },
    { id: 4, image: "/images/main/promo4.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=342" },
    { id: 5, image: "/images/main/promo5.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=340" },

    { id: 6, image: "/images/main/promo6.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=334" },
    { id: 7, image: "/images/main/promo7.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=330" },
    { id: 8, image: "/images/main/promo8.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=332" },
    { id: 9, image: "/images/main/promo9.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=335" },
    { id: 10, image: "/images/main/promo10.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=331" },

    { id: 11, image: "/images/main/promo11.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=99" },
    { id: 12, image: "/images/main/promo12.png", link: "https://www.baskinrobbins.co.kr/play/event/view.php?seq=2" },
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

    "2025-05-01 ~ 2025-05-31",
    "2025-05-03 ~ 2025-05-31",
    "2025-04-23 ~ 소진 시 까지",
    "2025-05-01 ~ 2025-05-26",
    "2025-04-23 ~ 2025-06-30",

    "상시운영",
    "상시운영",
  ];

  const promo_text = [
    "그래이맛 콘테스트 1차 투표! TOP7을 뽑아주세요!",
    "젤리곰 무드등 세트 사전예약 시 2천원 할인!",
    "우석이 디지털 굿즈 2차",
    "해피볼 티니핑 프린세스 랜덤 피규어",
    "해피포인트 페스티벌 최대 50% OFF!",

    "5월 이달의 더블주니어! 이달의 맛 선택시,\n500원 추가하면 싱글레귤러를 더블주니어로\n더블업!",
    "우석이와 배라타임, 변우석 등신대 인증샷\n이벤트",
    "쿼터 이상 구매 시, 한정판 딜리백 4,900원",
    "5월 이달의 맛, 인스타그램에 사진을\n올려주세요!",
    "T 우주패스 구독하면 배스킨라빈스 3,000원\n교환권 추가 혜택!",

    "워크샵 by 배스킨라빈스 그랜드 오픈",
    "1회용 컵 사용 줄이기 안내",
  ];

  const handleCardClick = (promo) => {
    // 각 카드별 배스킨라빈스 실제 프로모션 페이지로 연결
    window.open(promo.link, '_blank');
    // window.open(`/promotion/${promoId}`, "_blank");
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
                          onClick={() => handleCardClick(promo)}
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
