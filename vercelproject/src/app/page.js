import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Footer from "./../components/Footer.jsx";

export default function App() {
  return (
    <div className="app-wrapper">
      <meta name="viewport" content="width=1280, user-scalable=no" />
      <main style={{ minHeight: "60vh", background: "#fff" }} />
      <Footer />
    </div>
  );
}
