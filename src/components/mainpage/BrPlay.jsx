"use client";
import "@/styles/mainpage/brplay.css";

export default function BRPlaySection() {
  return (
    <div className="brplay-container">
      <div className="brplay-content">
        <div className="brplay-header">
          <h2 className="brplay-title">BR Play</h2>
          <p className="brplay-description">
            베스킨 라빈스 다양한 이벤트를 즐겨보세요
          </p>
        </div>

        <div className="brplay-cards">
          <img
            src="/images/main/brplay_img1.png"
            alt="MY FLAVOR LIST"
            className="brplay-card-image"
          />

          <img
            src="/images/main/brplay_img2.png"
            alt="배달주문"
            className="brplay-card-image"
          />
        </div>
      </div>
    </div>
  );
}
