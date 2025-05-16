"use client";
import React, { useState } from "react";
import Tabs from "./Tabs.jsx";
import EventList from "./EventList.jsx";

export default function palzaPage() {
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