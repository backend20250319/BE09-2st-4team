"use client";

import { StoreContext } from "@/app/store/map/page";
import "@/styles/store/map/kakao-map.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { loadScript, initMap, drawMarkers } from "./KakaoMapUtil";

export default function KakaoMap() {
  const markersRef = useRef([]);
  const { stores, mapRef, customRef } = useContext(StoreContext);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!document.getElementById("kakao-map-script")) {
      loadScript(mapRef, setMapReady);
    } else if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        initMap(mapRef, setMapReady);
      });
    }
  }, []);

  useEffect(() => {
    if (mapReady) {
      drawMarkers(mapRef.current, markersRef, stores, customRef);
    }
  }, [mapReady, stores]);

  return (
    <div className="store-map-field">
      <div className="kakao-map" id="map"></div>
    </div>
  );
}
