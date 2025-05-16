"use client";
import React from "react";
import EventCard from "./EventCard.jsx";
export default function EventList({ events }) {
  return (
    <>
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </>
  );
}
