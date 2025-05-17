import "@/styles/store/map/kakao-map.css";
import { useEffect } from "react";

export default function KakaoMap() {
  useEffect(() => {
    // 1. 스크립트 태그 삽입
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=50815608b6bb99a16fff3ff61fc09e8c&autoload=false";
    script.async = true;

    script.onload = () => {
      // 2. SDK 로드 후 지도 생성
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="store-map-field">
      <div className="kakao-map" id="map"></div>
    </div>
  );
}
