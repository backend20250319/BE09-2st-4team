// src/components/play/br_play/EventPage.jsx
"use client";
import React, { useState } from "react";
import Tabs from "./Tabs.jsx";
import EventList from "./EventList.jsx";

const eventData = [
  {
    id: 22,
    title: "그레이맛 콘테스트 1차 투표! TOP7을 뽑아주세요!",
    type: "promotion",
    date: "2025-05-15 ~ 2025-05-20",
    badge: "D-01",
    img: "/images/promotion/id22.png",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/event/view.php?seq=345&category=ALL",
  },
  {
    id: 1,
    title: "우석이 디지털 굿즈 2차",
    type: "promotion",
    badge: "D-01",
    date: "2025-05-14 ~ 2025-05-20",
    img: "/images/promotion/id1.png",
    externalLink:
      "https://www.baskinrobbins.co.kr/play/event/view.php?seq=341&category=ALL",
  },
  {
    id: 2,
    title: "해피볼 티니핑 요전 프린세스 랜덤 피규어",
    type: "promotion",
    date: "2025-05-01 ~ 소진 시 까지",
    img: "/images/promotion/id2.png",
  },
  {
    id: 3,
    title: "해피포인트 페스티벌 최대 50% OFF!",
    type: "promotion",
    badge: "D-02",
    date: "2025-05-14 ~ 2025-05-21",
    img: "/images/promotion/id3.png",
  },
  {
    id: 4,
    title:
      "5월 이달의 더블주니어! 이달의 맛 선택시, 500원 추가하면 싱글레귤러를 더블주니어로 더블업",
    type: "promotion",
    date: "2025-05-01 ~ 2025-05-31",
    img: "/images/promotion/id4.png",
  },
  {
    id: 5,
    title: "우석이와 배라타임, 변우석 등신대 인증샷 이벤트",
    type: "promotion",
    badge: "D-12",
    date: "2025-05-03 ~ 2025-05-31",
    img: "/images/promotion/id5.png",
  },
  {
    id: 6,
    title: "해피아워, 2-5시 싱글레귤러 1+1",
    type: "benefit",
    badge: "D-12",
    date: "2025-05-01 ~ 2025-05-31",
    img: "/images/promotion/id6.png",
  },
  {
    id: 7,
    title: "쿼터 이상 구매 시, 한정판 딜리백 4,900원",
    type: "promotion",
    date: "2025-04-23 ~ 소진 시 까지",
    img: "/images/promotion/id7.png",
  },
  {
    id: 8,
    title: "5월 이달의 맛, 인스타그램에 사진을 올려주세요!",
    type: "promotion",
    badge: "D-07",
    date: "2025-05-01 ~ 2025-05-26",
    img: "/images/promotion/id8.png",
  },
  {
    id: 9,
    title: "삼성카드 LINK 연결 후, 2만원 이상 결제 시 2천원 OFF",
    type: "benefit",
    date: "2025-05-01 ~ 소진 시 까지",
    img: "/images/promotion/id9.png",
  },
  {
    id: 10,
    title: "T 우주패스 구독하면 배스킨라빈스 3,000원 교환권 추가 혜택!",
    type: "promotion",
    badge: "D-42",
    date: "2025-04-23 ~ 2025-06-30",
    img: "/images/promotion/id10.png",
  },
  {
    id: 11,
    title: "워크샵 by 배스킨라빈스 그랜드 오픈",
    type: "promotion",
    badge: "D-12",
    date: "2025-05-01 ~ 2025-05-31",
    img: "/images/promotion/id11.png",
  },
  {
    id: 12,
    title: "T멤버십 회원 대상 싱글레귤러 최대 50% 할인 또는 적립",
    type: "benefit",
    date: "상시 운영",
    img: "/images/promotion/id12.png",
  },
  {
    id: 13,
    title: "KT 멤버십 베스킨라빈스 특별한 제휴혜택!",
    type: "benefit",
    date: "상시 운영",
    img: "/images/promotion/id13.png",
  },
  {
    id: 14,
    title: "LG U+ 멤버십 배스킨라빈스 특별한 제휴 혜택!",
    type: "benefit",
    date: "상시 운영",
    img: "/images/promotion/id14.png",
  },
];

const tabs = [
  { key: "all", label: "전체" },
  { key: "promotion", label: "프로모션" },
  { key: "benefit", label: "제휴혜택" },
];

export default function EventPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = eventData.filter(
    (e) => activeTab === "all" || e.type === activeTab
  );

  return (
    <>
      <h1 className="title-main">Event</h1>
      <p className="title-sub">
        배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는
        <br />
        다양한 이벤트를 확인해보세요
      </p>

      <div className="tabs-wrapper">
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      <div className="grid">
        <EventList events={filtered} />
      </div>
    </>
  );
}
