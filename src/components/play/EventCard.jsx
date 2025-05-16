// src/components/EventCard.jsx
"use client";
import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="card">
      <div className="card-image-wrap" style={{ "--bg-color": event.bgColor }}>
        {event.badge && <div className="badge">{event.badge}</div>}

        {event.img && (
          <img src={event.img} alt={event.title} className="card-image" />
        )}
      </div>

      <div className="card-body">
        <div className="type">
          {event.type === "promotion"
            ? "프로모션"
            : event.type === "benefit"
            ? "제휴혜택"
            : "온라인 이벤트"}
        </div>
        <div className="card-title">{event.title}</div>
        <div className="date">{event.date}</div>
        <div className="description">{event.desc}</div>
      </div>
    </div>
  );
}
