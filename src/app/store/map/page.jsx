"use client";
import { useState, useContext, createContext, useRef } from "react";
import StoreMapForm from "@/components/store/map/StoreMapForm";
import PageHeader from "@/components/store/PageHeader";
import StoreList from "../../../components/store/map/StoreList";
import KakaoMap from "@/components/store/map/kakaoMap/KaKaoMap";

export const StoreContext = createContext();

function StoreProvider({ children }) {
  const [stores, setStores] = useState([]);
  const mapRef = useRef(null);
  const customRef = useRef(null);

  return (
    <StoreContext.Provider value={{ stores, setStores, mapRef, customRef }}>
      {children}{" "}
    </StoreContext.Provider>
  );
}
export default function Map() {
  return (
    <StoreProvider>
      <section>
        <PageHeader title="store" />
        <div
          className="store-map__container"
          style={{
            marginTop: "70px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <div className="store-map__content">
            <StoreMapForm></StoreMapForm>
            <StoreList></StoreList>
          </div>
          <KakaoMap />
        </div>
      </section>
    </StoreProvider>
  );
}
