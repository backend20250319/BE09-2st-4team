"use client";
import { useState, useRef, useEffect } from "react";

const services = [
  ["C", "주차"],
  ["D", "배달"],
  ["E", "픽업"],
  ["F", "취식여부"],
  ["G", "해피스테이션"],
  ["H", "가챠머신"],
  ["I", "KT 제휴"],
  ["J", "SKT 제휴 "],
  ["K", "LGU+ 제휴"],
  ["L", "맛보기 제휴"],
];

export default function DropdownButton({ setStoreType, setSelectedServices }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
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
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        옵션 선택
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div onChange={changeStoreType}>
            <dt className="dropdown-dt">매장타입</dt>
            <dd>
              <label>
                <input type="checkbox" name="store_type" value="A" />
                <span>BR 31</span>
              </label>
            </dd>
            <dd>
              <label>
                <input type="checkbox" name="store_type" value="B" />
                <span>100flavor</span>
              </label>
            </dd>
          </div>
          <div onChange={changeSelectedService}>
            <dt className="dropdown-dt">제공 서비스</dt>
            {services.map((service, index) => {
              return (
                <dd key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name="service_info"
                      value={service[1]}
                    />
                    <span>{service[1]}</span>
                  </label>
                </dd>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
