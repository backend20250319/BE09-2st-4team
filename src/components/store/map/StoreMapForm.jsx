"use client";

import { locationData } from "@/data/store/locationData";
import { useContext, useState, useEffect, useRef } from "react";
import DropdownButton from "./DropdownButton";
import "@/styles/store/map/store-map-form.css";
import { StoreContext } from "@/app/store/map/page";
import store_info from "@/data/store/store_info.json";

export default function StoreMapForm() {
  const [storeType, setStoreType] = useState([]);
  const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { stores, setStores } = useContext(StoreContext);
  const cities = Object.keys(locationData);

  const ggRef = useRef(null);

  const changeSido = (e) => {
    setSido(e.target.value);
    ggRef.current.value = 0;
  };

  useEffect(() => {
    setStores(store_info);
  }, []);

  const seacrhStore = (e) => {
    e.preventDefault();

    setStores(() => {
      return store_info.filter((store) => {
        const matchesStoreType =
          storeType.length === 0 || storeType.includes(store.store_type);
        const matchesServices =
          selectedServices.length === 0 ||
          selectedServices.every((service) =>
            store.service_info.includes(service)
          );
        const matchesSido = !sido || store.addr_si.includes(sido);
        const matchesGugun = !gugun || store.addr_gugun.includes(gugun);
        const matchesKeyword =
          !keyword ||
          store.store_name.toUpperCase().includes(keyword.toUpperCase());

        return (
          matchesStoreType &&
          matchesServices &&
          matchesSido &&
          matchesGugun &&
          matchesKeyword
        );
      });
    });
  };

  return (
    <div className="store-map__content" style={{ borderBottom: "none" }}>
      <form action="" className="store-map-form">
        <fieldset>
          <DropdownButton
            setSelectedServices={setSelectedServices}
            setStoreType={setStoreType}
          />
          {/*  ----------------------------------------- */}
          <div className="store-map-city">
            <select
              className="store-map__button store-map-city__select"
              name="sido"
              id="sido"
              onChange={changeSido}
            >
              <option value="">도/시 선택</option>
              {cities.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
            </select>
            <select
              className="store-map__button store-map-city__select"
              name="gugun"
              id="gugun"
              onChange={(e) => {
                setGugun(e.target.value);
              }}
              ref={ggRef}
            >
              <option value="">구/군 선택</option>
              {locationData[sido].map((v, index) => {
                return (
                  <option value={v} key={index}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <div className="store-map-input">
          <input
            className="store-map-input__input"
            type="text"
            placeholder="매장명"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
        <button onClick={seacrhStore} className="store-map__submit">
          검색
        </button>
      </form>
    </div>
  );
}
