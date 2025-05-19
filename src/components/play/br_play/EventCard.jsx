// src/components/play/br_play/EventCard.jsx
"use client";
import React from "react";
import Link from "next/link";

export default function EventCard({ event }) {
  const isExternal = !!event.externalLink;

  // 외부 링크 카드 처리
  if (isExternal) {
    return (
      <a
        href={event.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`card ${event.type}`}
        style={{ textDecoration: "none" }}
      >
        <div
          className="card-image-wrap"
          style={{ "--bg-color": event.bgColor }}
        >
          {event.badge && <div className="badge">{event.badge}</div>}
          {event.img && (
            <img src={event.img} alt={event.title} className="card-image" />
          )}
        </div>
        <div className="card-body">
          <div className="type">
            {event.type === "promotion" ? "프로모션" : "제휴혜택"}
          </div>
          <div className="card-title">{event.title}</div>
          <div className="date">{event.date}</div>
        </div>
      </a>
    );
  }

  // 내부 링크 카드 처리
  return (
    <Link href={`/event/${event.id}`} legacyBehavior>
      <a className={`card ${event.type}`} style={{ textDecoration: "none" }}>
        <div
          className="card-image-wrap"
          style={{ "--bg-color": event.bgColor }}
        >
          {event.badge && <div className="badge">{event.badge}</div>}
          {event.img && (
            <img src={event.img} alt={event.title} className="card-image" />
          )}
        </div>
        <div className="card-body">
          <div className="type">
            {event.type === "promotion" ? "프로모션" : "제휴혜택"}
          </div>
          <div className="card-title">{event.title}</div>
          <div className="date">{event.date}</div>
        </div>
      </a>
    </Link>
  );
}
