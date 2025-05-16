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

    const itemTexts = [
    "핑크팜 캠페인\n지역 농가 상생 프로젝트",
    "핑크드림 캠페인\n청소년 자립 지원 프로젝트",
    "핑크링크 캠페인\n중소 기업 콜라보 프로젝트"
  ];

  return (
    <div className="bebetter-container">
      <div className="bebetter-header">
        <h2 className="bebetter-title">Be Better</h2>
        <p className="bebetter-description">
          베스킨라빈스 캐릭터와 함께 기쁨을 나눠보세요
        </p>
      </div>

      <div className="bebetter-grid">
        {bebetterItems.map((item) => (
          <div key={item.id} className="bebetter-item-container">
            {/* 이미지 부분 */}
            <div className="bebetter-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="bebetter-product-image"
              />
            </div>

            {/* 텍스트 부분 */}
            <div className="bebetter-text-container">
              <h3 className="bebetter-item-title">{item.title}</h3>
              <p className="bebetter-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
