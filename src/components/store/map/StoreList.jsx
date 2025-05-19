"use client";

import { useContext, useEffect } from "react";
import { StoreContext } from "@/app/store/map/page";
import { moveTo, onStoreClick } from "./kakaoMap/KakaoMapUtil";
import "@/styles/store/map/store-list.css";

export default function StoreList() {
  const { stores, customRef, mapRef } = useContext(StoreContext);

  return (
    <div>
      <p
        style={{
          margin: "0",
          padding: "0 20px",
          fontSize: "17px",
        }}
      >
        검색결과
        <span style={{ color: "#ff3f68" }}> {stores.length}</span>개
      </p>
      <div className="store-map-list__container">
        <ul
          style={{
            borderTop: "1px solid #e1e1e1",
          }}
        >
          {stores.map((store, index) => {
            return (
              <li
                key={index}
                style={{ padding: "20px 0", borderTop: "1px solid #e0e0e0" }}
              >
                <a
                  href="#"
                  type="button"
                  data={store}
                  className="store-map-list__button"
                  onClick={() => {
                    moveTo(mapRef.current, store.latitude, store.longitude);
                    onStoreClick(mapRef.current, customRef, store);
                  }}
                >
                  <div>
                    <h3 className="store-map-list__title">
                      {store.store_name}
                    </h3>
                    <address className="store-map-list__address ">
                      {store.addr_si} {store.addr_gugun} {store.addr_road}{" "}
                      {store.addr_detail}
                    </address>
                    <dl className="store-map-list__content">
                      <dd>{store.local_no}</dd>
                      <dd>{store.operation_time}</dd>
                    </dl>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
