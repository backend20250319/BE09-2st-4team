"use client";
import { useState } from "react";
import "@/styles/store/flavor/flavor-store.css";
import SwipeSlide from "./SwipeSlide";

export default function FlavorStore() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stores = [
    [
      "부산 서면 중앙점",
      "부산 부산진구 부전동 195-3 1층",
      "051-803-1180",
      "AM 10 ~ PM 11",
      "선데볼, 크레이프 포켓, 타코",
      "주차가능, 해피포인트 적립가능, 해피오더 딜리버리, 해피오더 픽업",
    ],
    [
      "파르나스몰점",
      "서울 강남구 테헤란로 521, 지하1층 R-21,22호(삼성동, 파르나스타워)",
      "02-3453-8801",
      "AM 10 ~ PM 11",
      "선데볼, 크레이프 포켓, 타코",
      "주차가능, 해피포인트 적립가능, 해피오더 픽업, 해피오더 딜리버리, 요기요",
    ],
    [
      "SPC 스퀘어점",
      "서울 강남구 역삼동 831-23 2층",
      "02-565-1012",
      "AM 10 ~ PM 11",
      "선데볼, 텐미니, 타코",
      "주차가능, 해피포인트 적립가능, 해피오더 픽업, 해피오더 딜리버리, 요기요",
    ],
    [
      "강남대로점",
      "서울특별시 강남구 강남대로 442(역삼1동) 1층",
      "02-561-1217",
      "AM 10 ~ PM 11",
      "선데볼, 텐미니, 타코",
      "해피포인트 적립가능, 해피오더 픽업, 해피오더 딜리버리, 요기요",
    ],
  ];
  return (
    <section className="flavor-store">
      <nav className="page-tab">
        <ul className="page-tab__list">
          {stores.map((store, index) => (
            <li
              key={index}
              className={`page-tab__item ${
                activeIndex === index ? "page-tab__item--active" : ""
              }`}
            >
              <button
                className="page-tab__link"
                onClick={() => setActiveIndex(index)}
              >
                <span className="page-tab__text">{store[0]}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="store-flavor-store__list">
        {stores.map((store, index) => (
          <div
            key={index}
            className={`store-flavor-store__item ${
              activeIndex === index ? "store-flavor-store__item--active" : ""
            }`}
          >
            <div>
              <h3>{store[0]}</h3>
              <dl>
                <div>
                  <dt>매장주소</dt>

                  <dd>{store[1]}</dd>
                </div>
                <div>
                  <dt>전화번호</dt>

                  <dd>{store[2]}</dd>
                </div>
                <div>
                  <dt>운영시간</dt>

                  <dd>{store[3]}</dd>
                </div>
                <div>
                  <dt>스페셜메뉴</dt>

                  <dd>{store[4]}</dd>
                </div>
                <div>
                  <dt>매장서비스</dt>

                  <dd>{store[5]}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
