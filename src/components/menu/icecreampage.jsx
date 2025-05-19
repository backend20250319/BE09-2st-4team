"use client";
import React from "react";
import "@/styles/menu/icecreampage.css";
import Link from "next/link";

const iceCreams = [
  {
    name: "봄날의 곰을 좋아하세요?",
    file: "icecream-1.png",
    label: "NEW",
    tags: "#이달의 맛 #딸기 #바나나 #곰돌이젤리",
  },
  {
    name: "아이 원-츄!",
    file: "icecream-2.png",
    label: "NEW",
    tags: "#이달의 맛 #쫀득쫀득",
  },
  {
    name: "아이스 칼로프 멜론",
    file: "icecream-3.png",
    label: "NEW",
    tags: "#이달의 맛 #칼로프 #메론",
  },
  {
    name: "피치 요거트",
    file: "icecream-4.png",
    tags: "#피치 #요거트트",
  },
  {
    name: "망고 탱고",
    file: "icecream-5.png",
    tags: "#망고 #탱고",
  },
];

const IceCreamPage = () => {
  return (
    <main className="content">
      <h1 className="title">Ice Cream</h1>
      <p className="subtitle">
        한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        <br />
        당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을
        거예요.
      </p>

      <div className="icecream-grid">
        {iceCreams.map((item, index) => (
          <div key={index} className="icecream-item">
            <Link
              href={`/menu/menuview${index}`}
              className={`menu-card icecream${index}`}
            >
              <img
                src={`/images/menu/icecream/${item.file}`}
                alt={item.name}
                className="menu-card__image"
              />
              {item.label && (
                <div className="icecream-ribbon">{item.label}</div>
              )}
              <span className="menu-card__hash">{item.tags}</span>
            </Link>
            <p className="icecream-name">{item.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IceCreamPage;
