// src/components/play/br_play/EventDetail.jsx

import { useParams } from "react-router-dom";
import eventData from "../data/eventData";

export default function EventDetail() {
  const { id } = useParams();
  const event = eventData.find((e) => e.id.toString() === id);

  if (!event) return <div>이벤트를 찾을 수 없습니다.</div>;

  return (
    <div className="event-detail-container">
      <h1 className="title-main">Event</h1>
      <p className="title-sub">
        {event.type === "promotion" ? "프로모션" : "제휴혜택"}
      </p>
      <h2 className="event-detail-title">{event.title}</h2>
      <p className="event-detail-date">{event.date}</p>
      <img src={event.img} alt={event.title} className="event-detail-img" />
      <p className="event-detail-description">{event.description}</p>
    </div>
  );
}
