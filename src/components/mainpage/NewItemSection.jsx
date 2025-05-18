"use client";
import "@/styles/mainpage/newitem.css";

export default function NewItemSection() {

  const newItems = [
    {
      id: 1,
      image: "/images/main/new_item1.png",
      isLarge: true,
    },
    {
      id: 2,
      image: "/images/main/new_item2.png",
    },
    {
      id: 3,
      image: "/images/main/new_item3.png",
    },
    {
      id: 4,
      image: "/images/main/new_item4.png",
    },
    {
      id: 5,
      image: "/images/main/new_item5.png",
    },
  ];

  const itemTexts = [
    "",
    "플라워 블라썸 케이크",
    "플라워 베리 케이크",
    "감사를 담은 헤이즐넛\n초콜릿칩 달항아리",
    "사랑을 담은 유자\n마스카포네 달항아리",
  ];

  return (
    <div className="newitem-container">
      <div className="newitem-header">
        <h2 className="newitem-title">New Item</h2>
        <p className="newitem-description">
          새롭고 맛있는 아이스크림을 소개합니다
        </p>
      </div>

      <div className="newitem-grid">
        <div className="newitem-card-large">
          <img
            src={newItems[0].image}
            alt="아이 원츄!"
            className="newitem-full-image"
          />
        </div>

        {newItems.slice(1).map((item, index) => (
          <div key={item.id} className="newitem-item-container">
            <div className="newitem-image-container">
              <img src={item.image} alt="" className="newitem-product-image" />
            </div>

            <div className="newitem-text-container">
              <p className="newitem-product-title">{itemTexts[index + 1]}</p>
              <div className="newitem-arrow-circle">
                <img
                  src="/images/main/arrow_icon.png"
                  alt="화살표"
                  className="newitem-arrow-icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="newitem-navigation">
        <span className="newitem-dot active"></span>
        <span className="newitem-dot"></span>
        <span className="newitem-dot"></span>
      </div>
    </div>
  );
}
