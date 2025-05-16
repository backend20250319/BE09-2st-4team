"use client";
import React from "react";
import "@/styles/menu/dessertpage.css";

const dessertPage = [
  {
    name: "아이스크림 롤 초콜릿 ",
    file: "dessert-1.png",
    tags: "#초콜릿",
  },
  {
    name: "마이멜로디 스틱바 딸기 요거트",
    file: "dessert-2.png",
    label: "NEW",
    tags: "#마이멜로디 #딸기요거트 #사베트",
  },
  {
    name: "쿠로미 스틱바 블랙소르베 제로",
    file: "dessert-3.png",
    label: "SOLD OUT",
    tags: "#쿠로미스틱바 #블랙소르베 #제로칼로리",
  },
  {
    name: "더 듬뿍 팥 컵빙수",
    file: "dessert-4.png",
    tags: "#컵사이즈 #팥빙수 #더듬뿍팥컵빙수",
  },
  {
    name: "홀리데이 미니 아이스 마카롱",
    file: "dessert-5.png",
    tags: "#마카롱 #초코 # 바닐라",
  },
];

const DessertPage = () => {
  return (
    <main className="content">
      <h1 className="title">Dessert</h1>
      <p className="subtitle">
        아이스크림을 더욱 맛있고 특별하게 즐길 수 있는 배스킨라빈스의 아이스
        디저트!
        <br />
        쫀득한 모찌부터 달콤한 마카롱까지 다양한 디저트를 만나보세요.
      </p>

      <div className="dessert-grid">
        {dessertPage.map((item, index) => (
          <div key={index} className="dessert-item">
            <a href="#" className={`menu-card dessert${index}`}>
              <img
                src={`/images/menu/dessert/${item.file}`}
                alt={item.name}
                className="menu-card__image"
              />
              {item.label && <div className="dessert-ribbon">{item.label}</div>}
              <span className="menu-card__hash">{item.tags}</span>
            </a>
            <p className="dessert-name">{item.name}</p>{" "}
            {/* 카드 외부로 분리된 이름 */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default DessertPage;
