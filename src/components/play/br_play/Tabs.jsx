// src/components/play/br_play/Tabs.jsx

"use client";
import React from "react";
export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <div
          key={t.key}
          className={`tab-item ${t.key === active ? "active" : ""}`}
          onClick={() => onChange(t.key)}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
}
