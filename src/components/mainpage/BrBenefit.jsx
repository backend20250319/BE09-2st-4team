// BRBenefitSection.jsx
"use client";
import "@/styles/mainpage/brbenefit.css";

export default function BRBenefitSection() {
  return (
    <div className="brbenefit-container">
      <div className="brbenefit-header">
        <h2 className="brbenefit-title">BR Benefit</h2>
        <p className="brbenefit-description">
          베라와 함께 다양한 혜택을 즐기세요
        </p>
      </div>

      <div className="brbenefit-content">
        {/* 나중에 스위퍼로 구현할 부분 */}
        <img
          src="/images/main/br_benefit_carousel.jpg"
          alt="BR Benefit 이벤트"
          className="brbenefit-carousel-image"
        />
      </div>
    </div>
  );
}
