"use client";
import Link from "next/link";
import React from "react";

export default function FlavorPage({ image, link }) {
  return (
    <Link href={link} className="flavor-card">
      <img src={image} alt="flavor" className="flavor-image" />
    </Link>
  );
}