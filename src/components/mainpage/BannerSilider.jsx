"use client";

import { useState, useEffect } from "react";

export default function BannerSlider() {
  const [visible, setVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [popupsHidden, setPopupsHidden] = useState(false);
  const [buttonMoved, setButtonMoved] = useState(false);

  // 팝업 데이터
  const popups = [
    {
      id: "promo",
      image: "/images/main/popup1.png",
    },
    {
      id: "flavor",
      image: "/images/main/popup2.png",
    },
    {
      id: "event",
      image: "/images/main/popup3.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      setInitialLoad(false);
    }, 700);

    if (visible) {
      const totalAnimationTime = (popups.length * 0.4 + 0.6) * 1000; // 밀리초 단위로 변환
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, totalAnimationTime);

      return () => clearTimeout(timer);
    }
  }, [visible, popups.length]);

  const togglePopup = () => {
    if (!popupsHidden) {
      setPopupsHidden(true);
      setButtonMoved(true); // 버튼을 이동된 위치로
    } else {
      setPopupsHidden(false);
      setButtonMoved(false); // 버튼을 원래 위치로
    }
  };

  return (
    <div className="frame-container">
      <div className="banner-wrapper">
        {/* 프레임 이미지 */}
        <img
          src="/images/main/banner_frame.png"
          alt="프레임"
          className="frame-img"
        />

        {/* 배너 이미지 */}
        <div className="banner-container">
          <img
            src="/images/main/main_banner.png"
            alt="메인배너"
            className="banner-img"
          />

          {/* 팝업 컨테이너 */}
          <div className="popup-outer-container">
            <div className="popup-container">
              {popups.map((popup, index) => (
                <div
                  className={`popup-card ${
                    visible && !popupsHidden ? "visible" : "hidden"
                    // className={`popup-card ${
                    //   visible && !popupsHidden ? "visible" : "hidden"
                  }`}
                  // className={`popup-card ${visible ? "visible" : "hidden"}`}
                  key={popup.id}
                  style={{
                    transitionDelay:
                      visible && !popupsHidden
                        ? `${index * 0.4}s`
                        : `${(index + 1 )* 0.4}s`
                        // : `${(popups.length - index - 1) * 0.4}s`,
                  }}
                >
                  <div className="popup-image-container">
                    <img src={popup.image} alt={popup.id} />
                  </div>
                </div>
              ))}

              <div
                className={`popup-toggle ${visible ? "visible" : "hidden"}`}
                onClick={togglePopup}
                style={{
                  transform: !visible
                    ? "translateX(350%) rotate(-100deg)"
                    : buttonMoved
                    ? "translateX(350%) rotate(-100deg)" // 클릭 후 이동
                    : "translateX(0) rotate(0)", // 기본 위치
                  opacity: visible ? 1 : 0,
                  transitionDelay:
                    visible && !buttonMoved
                      ? `${(popups.length - 1) * 0.4}s`
                      : buttonMoved && popupsHidden
                      ? `${(popups.length) * 0.4}s`
                      : buttonMoved && !popupsHidden
                      ? `${(popups.length - 1) * 0.4}s`
                      : "0s",
                }}
              >
                <img
                  src="/images/main/btn_icon.png"
                  alt={visible ? "닫기" : "열기"}
                  className="toggle-button-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
