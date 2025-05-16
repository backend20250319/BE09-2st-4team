"use client";
import React from "react";
import "@/styles/menu/prepackpage.css";

const prepackItems = [
  { name: "레디팩 (초코나무 숲)", file: "pack-1.png" },
  { name: "레디팩 (팥있는 말차당)", file: "pack-2.png" },
  { name: "레디팩 (초콜릿)", file: "pack-3.png" },
  { name: "레디팩 (31 요거트)", file: "pack-4.png" },
  { name: "레디팩 (레인보우 샤베트)", file: "pack-5.png" },
  { name: "레디팩 (민트 초콜릿 칩)", file: "pack-6.png" },
  { name: "레디팩 (베리베리 스트로베리)", file: "pack-7.png" },
  { name: "레디팩 (소금 우유)", file: "pack-8.png" },
  { name: "레디팩 (아몬드 봉봉)", file: "pack-9.png" },
  { name: "레디팩 (엄마는 외계인)", file: "pack-10.png" },
  { name: "레디팩 (오레오 쿠키 앤 크림)", file: "pack-11.png" },
  { name: "레디팩 (체리쥬빌레)", file: "pack-12.png" },
];

const PrepackPage = () => {
  return (
    <main className="content">
      <h1 className="title">Prepack</h1>
      <p className="subtitle">
        한 입에 물면 달콤하게 사르르 녹는 아이스크림.
        <br />
        당신이 어떤 기분이든 그 아이스크림을 따라 당신의 기분은 아마 달콤해졌을
        거예요.
      </p>

      <div className="prepack-grid">
        {prepackItems.map((item, i) => (
          <div className="prepack-item" key={i}>
            <img
              src={`/images/menu/prepack/${item.file}`}
              alt={item.name}
              className="prepack-img"
            />
            <p className="prepack-name">{item.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrepackPage;
