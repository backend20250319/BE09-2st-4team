"use client";
import "@/styles/mainpage/brbenefit.css";

export default function BRBenefitSection() {
  const benefitItems = [
    {
      id: 1,
      image: "/images/main/benefit1.png",
      alt: "유플러스 Pick 2",
    },
    {
      id: 2,
      image: "/images/main/benefit2.png",
      alt: "Samsung Card",
    },
    {
      id: 3,
      image: "/images/main/benefit3.png",
      alt: "Hyundai Card Apple Pay",
    },
    {
      id: 4,
      image: "/images/main/benefit4.png",
      alt: "Happy Point",
    },
    {
      id: 5,
      image: "/images/main/benefit5.png",
      alt: "M Point",
    },
  ];

  return (
    <div className="brbenefit-container">
      <div className="brbenefit-header">
        <h2 className="brbenefit-title">BR Benefit</h2>
        <p className="brbenefit-description">
          베라와 함께 다양한 혜택을 즐기세요
        </p>
      </div>

      <div className="brbenefit-content">
        <div className="brbenefit-grid">
          {benefitItems.map((item) => (
            <div key={item.id} className="brbenefit-card">
              <img
                src={item.image}
                alt={item.alt}
                className="brbenefit-card-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}