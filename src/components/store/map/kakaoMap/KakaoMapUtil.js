import InfoWindow from "./InfoWindow";

const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

export const loadScript = (mapRef, setMapReady) => {
  const script = document.createElement("script");
  script.id = "kakao-map-script";
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
  script.async = true;
  script.onload = () => {
    // 이 시점에는 window.kakao가 완전히 로드되어 있음
    window.kakao.maps.load(() => {
      initMap(mapRef, setMapReady); // 안전하게 호출 가능
    });
  };
  document.head.appendChild(script);
};

export const initMap = (mapRef, setMapReady) => {
  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(0, 0),
    level: 5,
  };
  mapRef.current = new window.kakao.maps.Map(container, options);
  setMapReady(true);
};

export const drawMarkers = (map, markersRef, storeList, customRef) => {
  markersRef.current.forEach((marker) => marker.setMap(null));
  markersRef.current = []; // 이전 마커들을 배열에서 제거

  if (customRef.current) {
    customRef.current.setMap(null);
  }

  if (storeList.length === 0) {
    return;
  }

  moveTo(map, storeList[0].latitude, storeList[0].longitude);

  storeList.forEach((store, index) => {
    const position = new window.kakao.maps.LatLng(
      store.latitude,
      store.longitude
    );
    const marker = new window.kakao.maps.Marker({
      position,
      title: store.store_name,
      id: index,
    });

    //이미지 지정
    let imageSrc = "/images/store/map/icon_map_marker_default.png";
    if (store.store_type === "B") {
      imageSrc = "/images/store/map/icon_map_marker_flavors.png";
    }
    const imageSize = new window.kakao.maps.Size(138, 118); // 이미지 크기 (너비, 높이)
    const imageOption = {
      offset: new window.kakao.maps.Point(25, 25), // 마커 이미지의 기준점 (중앙으로 설정)
    };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    marker.setImage(markerImage);

    // 오버레이 전역 변수로 선언

    // 마커 클릭 이벤트
    window.kakao.maps.event.addListener(marker, "click", function () {
      moveTo(map, store.latitude, store.longitude);

      if (customRef.current) {
        customRef.current.setMap(null);
      }

      const overlayContent = InfoWindow(store); // HTML 문자열 반환해야 함

      // 새 오버레이 생성
      customRef.current = new window.kakao.maps.CustomOverlay({
        content: overlayContent,
        position: marker.getPosition(),
        xAnchor: 0.5,
        yAnchor: 1,
      });

      customRef.current.setMap(map);

      const closeButton = document.getElementById("closeButton");
      if (closeButton) {
        closeButton.addEventListener("click", function () {
          customRef.current.setMap(null);
        });
      }
    });

    // 지도 클릭 시 오버레이 닫기
    window.kakao.maps.event.addListener(map, "click", function () {
      if (customRef.current) {
        customRef.current.setMap(null);
      }
    });

    marker.setMap(map);
    markersRef.current.push(marker);
  });
};

export const moveTo = (map, lat, lng) => {
  if (!map) return;

  const newPos = new window.kakao.maps.LatLng(lat, lng);
  map.panTo(newPos); // 혹은 map.setCenter(newPos);
};

export const onStoreClick = (mapRef, customRef, store) => {
  if (customRef.current) {
    customRef.current.setMap(null);
  }

  const overlayContent = InfoWindow(store); // HTML 문자열 반환
  customRef.current = new window.kakao.maps.CustomOverlay({
    content: overlayContent,
    position: new window.kakao.maps.LatLng(store.latitude, store.longitude),
    xAnchor: 0.5,
    yAnchor: 1,
  });

  customRef.current.setMap(mapRef);
};
