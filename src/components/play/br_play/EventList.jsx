// src/components/play/br_play/EventList.jsx
"use client";
import React from "react";
import Link from "next/link";

export default function EventList({ events }) {
  return events.map((event) => {
    const isExternal = !!event.externalLink;
    const cardContent = (
      <>
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
      </>
    );

    return isExternal ? (
      <a
        key={event.id}
        href={event.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`card ${event.type}`}
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </a>
    ) : (
      <Link key={event.id} href={`/event/${event.id}`} legacyBehavior>
        <a className={`card ${event.type}`} style={{ textDecoration: "none" }}>
          {cardContent}
        </a>
      </Link>
    );
  });
}
