"use client";

import { locationData } from "@/data/store/locationData";
import { useState } from "react";
import DropdownButton from "./DropdownButton";

export default function StoreMapForm() {
  const [storeType, setStoreType] = useState([]);
  const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [keyword, setKeyword] = useState("");
  const cities = Object.keys(locationData);
  console.log(selectedServices);
  console.log(storeType);

  const changeSido = (e) => {
    setSido(e.target.value);
  };

  return (
    <div>
      <form action="">
        <fieldset>
          <DropdownButton
            setSelectedServices={setSelectedServices}
            setStoreType={setStoreType}
          />
          {/*  ----------------------------------------- */}
          <select name="sido" id="sido" onChange={changeSido}>
            <option value="">도/시 선택</option>
            {cities.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
          </select>
          <select
            name="gugun"
            id="gugun"
            onChange={(e) => {
              setGugun(e.target.value);
            }}
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
        </fieldset>
        <input
          type="text"
          placeholder="매장명"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            console.log(keyword);
          }}
        />
        <button>검색</button>
      </form>
    </div>
  );
}
