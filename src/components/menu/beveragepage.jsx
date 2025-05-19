"use client";
import React from "react";
import "@/styles/menu/beveragepage.css";

const beveragePage = [
  {
    name: "밀크 쉐이크 ",
    file: "beverage-1.png",
    tags: "#밀크쉐이크",
  },
  {
    name: "카푸치노 블라스트\n(오리지널, 모카)",
    file: "beverage-2.png",
    label: "BEST",
    tags: "#카푸치노 #블라스트",
  },
  {
    name: "과일 블라스트\n(설향딸기, 리치워터)",
    file: "beverage-3.png",
    tags: "#설향딸기 #리치워터",
  },
  {
    name: "초코 도쿄바나나 블라스트",
    file: "beverage-4.png",
    tags: "#초코 #도쿄바나나 #블라스트",
  },
  {
    name: "그린티 킷캣 블라스트",
    file: "beverage-5.png",
    tags: "#그린티킷캣 #초코크림폼 #킷캣볼",
  },
];

const BeveragePage = () => {
  return (
    <main className="content">
      <h1 className="title">Beverage</h1>
      <p className="subtitle">
        짜릿하게 시원한 블라스트부터 아이스크림을 듬뿍넣고 갈아만든 쉐이크까지!
        <br />
        배스킨라빈스만의 특별함을 음료로 만나보세요.
      </p>

      <div className="beverage-grid">
        {beveragePage.map((item, index) => (
          <div key={index} className="beverage-item">
            <a href="#" className={`menu-card beverage${index}`}>
              <img
                src={`/images/menu/beverage/${item.file}`}
                alt={item.name}
                className="menu-card__image"
              />
              {item.label && (
                <div className="beverage-ribbon">{item.label}</div>
              )}
              <span className="menu-card__hash">{item.tags}</span>
            </a>
            <p className="beverage-name">{item.name}</p>{" "}
            {/* 카드 외부로 분리된 이름 */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default BeveragePage;
