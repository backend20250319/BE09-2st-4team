"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BeBetterPage() {
  const router1 = useRouter();

  const handleClick = () => {
    router1.push("/event");
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}>event페이지로</button>
    </div>
  );
}
