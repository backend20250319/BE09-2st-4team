"use client";

import { useState, useEffect } from "react";
// import BannerSlider from "../components/BannerSlider.jsx"
// import "../styles/main.css";

export default function BannerSlider() {
  const [visible, setVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  // 팝업 데이터
  const popups = [
    {
      id: "promo",
      //title: "우석이 디지털 굿즈 2차 지금 다운로드",
      image: "/images/popup1.png",
    },
    {
      id: "flavor",
      //title: "5월 이달의 맛 선택, 500원 추가 시 싱글레귤러 더블주니어!",
      image: "/images/popup2.png",
    },
    {
      id: "event",
      //title: "우석이와 배라타임",
      image: "/images/popup3.png",
    },
  ];

  useEffect(() => {
    // setVisible(false);

    setTimeout(() => {
      setVisible(true);
      setInitialLoad(false);
    }, 700);
  }, []);

  const togglePopup = () => {
    setVisible(!visible);
  };

  // 모든 팝업이 사라진 후 버튼이 마지막에 이동하도록 딜레이 계산
  // const buttonDelay = `${popups.length * 0.1 + 0.1}s`;

  return (
    <div className="frame-container">
      <div className="slider-container">
        <img
          src="/images/main_banner.png"
          alt="메인배너"
          className="banner-img"
        />

        <div className="popup-outer-container">
          <div className="popup-container">
            {popups.map((popup, index) => (
              <div
                className={`popup-card ${visible ? "visible" : "hidden"}`}
                key={popup.id}
                style={{
                  // transitionDelay: `${index * 0.2}s`,
                  transitionDelay: visible
                    ? `${index * 0.2}s` // 표시될 때는 위에서부터(첫 번째부터)
                    : `${index * 0.2}s`, // 사라질 때도 위에서부터(첫 번째부터)
                }}
              >
                <div className="popup-image-container">
                  <img src={popup.image} alt={popup.id} />
                </div>
              </div>
            ))}

            {/*  */}
            <button
              className={`popup-toggle ${visible ? "visible" : "hidden"}`}
              onClick={togglePopup}
              style={{
                // transitionDelay: `${popups.length * 0.1}s`,
                transitionDelay: visible
                  ? `${popups.length * 0.2 + 0.2}s` // 마지막 팝업 이후 나타남
                  : `${popups.length * 0.2 + 0.2}s`, // 마지막 팝업 이후 사라짐
              }}
            >
              {visible ? "x" : "+"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
