"use client";
import "@/styles/mainpage/bebetter.css";

export default function BeBetterSection() {
  const bebetterItems = [
    {
      id: 1,
      image: "/images/main/img_farm.png",
    },
    {
      id: 2,
      image: "/images/main/img_dream.png",
    },
    {
      id: 3,
      image: "/images/main/img_link.png",
    },
  ];

  const header = ["핑크팜 캠페인", "핑크드림 캠페인", "핑크링크 캠페인"];

  const text = [
    "지역 농가 상생 프로젝트",
    "청소년 자립 지원 프로젝트",
    "중소 기업 콜라보 프로젝트",
  ];

  return (
    <div className="bebetter-container">
      <div className="bebetter-header">
        <h2 className="bebetter-header-text">Be Better</h2>
        <p className="bebetter-description">
          베스킨라빈스 캐릭터와 함께 기쁨을 나눠보세요
        </p>
      </div>

      <div className="bebetter-grid">
        {bebetterItems.map((item, index) => (
          <div
            key={item.id}
            className={`bebetter-item-container bebetter-item-${item.id}`}
          >
            <div className="bebetter-image-container">
              <img
                src={item.image}
                alt={header[index]}
                className="bebetter-product-image"
              />
            </div>

            <div className="bebetter-text-container">
              <h3 className="bebetter-item-title">{header[index]}</h3>
              <p className="bebetter-item-description">{text[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
