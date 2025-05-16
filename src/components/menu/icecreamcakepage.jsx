"use client";
import React from "react";
import "@/styles/menu/icecreamcakepage.css";

const iceCreamCakes = [
  {
    name: "골라먹는 27 큐브 ",
    file: "icecreamcake-1.png",
    label: "BEST",
    tags: "#딸기 #치즈케이크 #민트",
  },
  {
    name: "골라먹는 와츄원",
    file: "icecreamcake-2.png",
    label: "BEST",
    tags: "#치즈 #민트 #딸기 #초콜릿",
  },
  {
    name: "진정한 티라미수 케이크",
    file: "icecreamcake-3.png",
    label: "추천",
    tags: "#자모카커피 #마스카포네치즈",
  },
  {
    name: "우주에서 온 엄마는 외계인",
    file: "icecreamcake-4.png",
    tags: "#베리베리스트로베리 #아몬드봉봉 #엄마는외계인#민트초콜릿칩",
  },
  {
    name: "반짝이는 잔망루피",
    file: "icecreamcake-5.png",
    tags: "#솜사탕 #트리플초콜릿 #초콜릿칩 #초콜릿",
  },
];

const IceCreamCakePage = () => {
  return (
    <main className="content">
      <h1 className="title">Ice Cream Cake</h1>
      <p className="subtitle">
        축하하고 싶은 날에도, 위로가 필요한 날에도, 그 모든 순간 함께 할
        아이스크림 케이크.
        <br />
        달콤한 아이스크림 케이크로 당신의 특별한 날을 더욱더 특별하게
        만들어드릴게요.
      </p>

      <div className="icecreamcake-grid">
        {iceCreamCakes.map((item, index) => (
          <div key={index} className="icecreamcake-item">
            <a href="#" className={`menu-card icecreamcake${index}`}>
              <img
                src={`/images/menu/icecreamcake/${item.file}`}
                alt={item.name}
                className="menu-card__image"
              />
              {item.label && (
                <div className="icecreamcake-ribbon">{item.label}</div>
              )}
              <span className="menu-card__hash">{item.tags}</span>
            </a>
            <p className="icecreamcake-name">{item.name}</p>{" "}
            {/* 카드 외부로 분리된 이름 */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default IceCreamCakePage;
