"use client";
import React from "react";
import "@/styles/menu/coffeepage.css";

const coffeePage = [
  {
    name: "아메리카노 ",
    file: "coffee-1.png",
    tags: "#아메리카노",
  },
  {
    name: "엄마는 외계인 카페모카",
    file: "coffee-2.png",
    tags: "#엄마는외계인 #카페모카",
  },
  {
    name: "바닐라빈 라떼",
    file: "coffee-3.png",
    tags: "#바닐라빈 라떼",
  },
  {
    name: "카페31",
    file: "coffee-4.png",
    tags: "#카페31",
  },
  {
    name: "슈가밤 블라스트",
    file: "coffee-5.png",
    tags: "#슈가밤 블라스트",
  },
];

const CoffePage = () => {
  return (
    <main className="content">
      <h1 className="title">Coffee</h1>
      <p className="subtitle">
        진한 카카오의 향과 풍부한 바디감의 배스킨라빈스 대표 커피 'Café Bris'
        <br />
        일상에 모든 순간을 카페브리즈와 함께하세요.
      </p>

      <div className="coffee-grid">
        {coffeePage.map((item, index) => (
          <div key={index} className="coffee-item">
            <a href="#" className={`menu-card coffee${index}`}>
              <img
                src={`/images/menu/coffee/${item.file}`}
                alt={item.name}
                className="menu-card__image"
              />
              {item.label && <div className="coffee-ribbon">{item.label}</div>}
              <span className="menu-card__hash">{item.tags}</span>
            </a>
            <p className="coffee-name">{item.name}</p>{" "}
            {/* 카드 외부로 분리된 이름 */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default CoffePage;
