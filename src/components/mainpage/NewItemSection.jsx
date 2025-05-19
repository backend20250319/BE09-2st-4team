"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@/styles/mainpage/newitem.css";

export default function NewItemSection() {
  const slideItems = [
    {
      id: 1,
      image: "/images/main/new_item1.png",
      isLarge: true,
      slideType: "first",
    },
    {
      id: 2,
      image: "/images/main/new_item2.png",
      slideType: "first",
    },
    {
      id: 3,
      image: "/images/main/new_item3.png",
      slideType: "first",
    },
    {
      id: 4,
      image: "/images/main/new_item4.png",
      slideType: "first",
    },
    {
      id: 5,
      image: "/images/main/new_item5.png",
      slideType: "first",
    },
    {
      id: 6,
      image: "/images/main/new_item6.png",
      isLarge: true,
      slideType: "second",
    },
    {
      id: 7,
      image: "/images/main/new_item7.png",
      slideType: "second",
    },
    {
      id: 8,
      image: "/images/main/new_item8.png",
      slideType: "second",
    },
    {
      id: 9,
      image: "/images/main/new_item9.png",
      slideType: "second",
    },
    {
      id: 10,
      image: "/images/main/new_item10.png",
      slideType: "second",
    },
  ];

  const itemTexts = [
    "",
    "미피와 신나는 애니멀 파크",
    "네모 블록 헬로키티",
    "네모 블록 미키 마우스",
    "뽀로로와 즐거운\n피크닉 타임",
    "",
    "플라워 블라썸 케이크",
    "플라워 베리 케이크",
    "감사를 담은 헤이즐넛\n초콜릿칩 달항아리",
    "사랑을 담은 유자\n마스카포네 달항아리",
  ];

  const firstSlideItems = slideItems.filter(
    (item) => item.slideType === "first"
  );
  const secondSlideItems = slideItems.filter(
    (item) => item.slideType === "second"
  );

  return (
    <div className="newitem-container">
      <div className="newitem-header">
        <h2 className="newitem-title">New Item</h2>
        <p className="newitem-description">
          새롭고 맛있는 아이스크림을 소개합니다
        </p>
      </div>

      <div className="newitem-main-swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          loop={false}
          className="newitem-main-swiper"
        >
          <SwiperSlide>
            <div className="newitem-second-grid">
              {firstSlideItems.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.isLarge
                      ? "newitem-card-large"
                      : "newitem-item-container"
                  }
                >
                  {item.isLarge ? (
                    <img
                      src={item.image}
                      alt="아이 원츄!"
                      className="newitem-full-image"
                    />
                  ) : (
                    <>
                      <div className="newitem-image-container">
                        <img
                          src={item.image}
                          alt=""
                          className="newitem-product-image"
                        />
                      </div>

                      <div className="newitem-text-container">
                        <p className="newitem-product-title">
                          {itemTexts[item.id - 1]}
                        </p>
                        <div className="newitem-arrow-circle">
                          <img
                            src="/images/main/arrow_icon.png"
                            alt="화살표"
                            className="newitem-arrow-icon"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="newitem-second-grid">
              {secondSlideItems.map((item) => (
                <div
                  key={item.id}
                  className={
                    item.isLarge
                      ? "newitem-card-large"
                      : "newitem-item-container"
                  }
                >
                  {item.isLarge ? (
                    <img
                      src={item.image}
                      alt="아이 원츄!"
                      className="newitem-full-image"
                    />
                  ) : (
                    <>
                      <div className="newitem-image-container">
                        <img
                          src={item.image}
                          alt=""
                          className="newitem-product-image"
                        />
                      </div>

                      <div className="newitem-text-container">
                        <p className="newitem-product-title">
                          {itemTexts[item.id - 1]}
                        </p>
                        <div className="newitem-arrow-circle">
                          <img
                            src="/images/main/arrow_icon.png"
                            alt="화살표"
                            className="newitem-arrow-icon"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
