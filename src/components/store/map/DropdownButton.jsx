"use client";
import { useState, useRef, useEffect } from "react";

const services = [
  ["주차", "주차"],
  ["배달", "배달"],
  ["픽업", "픽업"],
  ["취식여부", "취식여부"],
  ["해피스테이션", "해피스테이션"],
  ["가챠머신", "가챠머신"],
  ["KT제휴", "KT 제휴"],
  ["SKT제휴", "SKT 제휴 "],
  ["LG U+제휴", "LGU+ 제휴"],
  ["맛보기", "맛보기 제휴"],
];

export default function DropdownButton({ setStoreType, setSelectedServices }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    if (dropdownRef.current) {
      if (dropdownRef.current.className === "dropdown-container") {
        dropdownRef.current.className = "dropdown-container active";
      } else {
        dropdownRef.current.className = "dropdown-container";
      }
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeStoreType = (e) => {
    setStoreType((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const changeSelectedService = (e) => {
    setSelectedServices((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  return (
    <div ref={dropdownRef} className="dropdown-container">
      <button
        className="dropdown-toggle store-map__button"
        style={{}}
        onClick={toggleDropdown}
      >
        옵션 선택
      </button>
      {
        <div className={`dropdown-menu ${isOpen ? "isActice-menu" : ""}`}>
          <div onChange={changeStoreType}>
            <dt className="store-map-option__name">매장타입</dt>
            <dd style={{ marginTop: "22px" }}>
              <label className="store-map-option__label">
                <input
                  className="store-map-option__input"
                  type="checkbox"
                  name="store_type"
                  value="A"
                />
                <span className="store-map-option__text">BR 31</span>
              </label>
            </dd>
            <dd style={{ marginTop: "22px" }}>
              <label className="store-map-option__label">
                <input
                  className="store-map-option__input"
                  type="checkbox"
                  name="store_type"
                  value="B"
                />
                <span className="store-map-option__text">100flavor</span>
              </label>
            </dd>
          </div>
          <div onChange={changeSelectedService} style={{ marginTop: "50px" }}>
            <dt className="store-map-option__name">제공 서비스</dt>
            {services.map((service, index) => {
              return (
                <dd key={index} style={{ marginTop: "22px" }}>
                  <label className="store-map-option__label">
                    <input
                      className="store-map-option__input"
                      type="checkbox"
                      name="service_info"
                      value={service[0]}
                    />
                    <span className="store-map-option__text">{service[1]}</span>
                  </label>
                </dd>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
}
