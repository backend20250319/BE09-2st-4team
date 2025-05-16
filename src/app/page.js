import Image from "next/image";
import styles from "@/styles/flavorpage.css";
import React from "react";
import Footer from "./../components/Footer.jsx";
import BeBetterPage from "../components/story/bebetter/BeBetterPage.jsx";
import FlavorPage from "../components/story/flavor/FlavorPage.jsx";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "40px 0" }}>
        배스킨라빈스에 오신 것을 환영합니다!
      </h1>
    </div>
  );
}
