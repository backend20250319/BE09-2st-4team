"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "@/styles/header.css";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserToggle = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  return (
    <div className="menu-hover-area" onMouseLeave={handleMouseLeave}>
      <header className="site-header" onMouseEnter={() => setActiveMenu(null)}>
        <div className="site-header__container">
          <div className="site-header__left">
            <Link href="/" className="site-header__logo">
              <Image
                src="/images/h_logo_2.png"
                alt="Baskin Robbins"
                width={60}
                height={60}
              />
            </Link>

            <nav className="site-menu">
              <div
                className="site-menu__item-wrapper"
                onMouseEnter={() => handleMouseEnter("menu")}
              >
                <Link href="/menu" className="site-menu__link">
                  Menu
                </Link>
              </div>

              <div
                className="site-menu__item-wrapper"
                onMouseEnter={() => handleMouseEnter("brplay")}
              >
                <Link href="/play" className="site-menu__link">
                  BR Play
                </Link>
              </div>

              <div
                className="site-menu__item-wrapper"
                onMouseEnter={() => handleMouseEnter("brstory")}
              >
                <Link href="/story/brandhistory" className="site-menu__link">
                  BR Story
                </Link>
              </div>

              <div
                className="site-menu__item-wrapper"
                onMouseEnter={() => handleMouseEnter("deliveryStore")}
              >
                <Link href="/store/map" className="site-menu__link">
                  Delivery/Store
                </Link>
              </div>
            </nav>
          </div>

          <div className="site-header__right">
            {/* 검색 기능 */}
            <div
              style={{
                position: "relative",
                display: "flex",
                width: "80px",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Link
                href="#"
                className="site-header__icon search-icon"
                aria-label="검색"
                onClick={handleSearchToggle}
              />
              <div className="underline-only" />
            </div>

            {/* 유저 아이콘 기능 */}
            <div className="user-menu-wrapper">
              <button
                className="site-header__icon user-icon"
                aria-label="로그인"
                onClick={handleUserToggle}
              ></button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <Link
                    href="https://www.baskinrobbins.co.kr/login/login.php?returnURL=%2Fstory%2Fhistory.php%3Frelease_year%3D2025"
                    className="user-dropdown__item"
                  >
                    <strong>Login</strong>
                  </Link>
                  <Link
                    href="https://www.happypointcard.com/page/join/index.spc"
                    className="user-dropdown__item"
                  >
                    Join
                  </Link>
                  <Link
                    href="https://www.baskinrobbins.co.kr/information-center/customer/list.php"
                    className="user-dropdown__item"
                  >
                    <strong>CS CENTER</strong>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* ✅ submenu는 메뉴별로 다른 내용 출력 */}
      {/* Menu submenu */}
      {activeMenu === "menu" && (
        <div
          className="submenu-bar"
          onMouseEnter={() => handleMouseEnter("menu")}
        >
          <div className="submenu-bar__container">
            <Link href="/menu/thismonth" className="submenu__item">
              이달의 맛
            </Link>
            <Link href="/menu" className="submenu__item">
              아이스크림
            </Link>
            <Link href="/menu/prepack" className="submenu__item">
              프리팩
            </Link>
            <Link href="/menu/icecreamcake" className="submenu__item">
              아이스크림 케이크
            </Link>
            <Link href="/menu/dessert" className="submenu__item">
              디저트
            </Link>
            <Link href="/menu/beverage" className="submenu__item">
              음료
            </Link>
            <Link href="/menu/coffee" className="submenu__item">
              커피
            </Link>
          </div>
        </div>
      )}

      {/* BR Play submenu */}
      {activeMenu === "brplay" && (
        <div
          className="submenu-bar"
          onMouseEnter={() => handleMouseEnter("brplay")}
        >
          <div className="submenu-bar__container column">
            <div className="submenu-column">
              <h4 className="submenu-title">이벤트</h4>
              <div className="submenu-items">
                <Link href="#" className="submenu__item sub">
                  프로모션
                </Link>
                <Link href="#" className="submenu__item sub">
                  제휴혜택
                </Link>
              </div>
            </div>
            <div className="submenu-column">
              <h4 className="submenu-title">BR Play</h4>
              <div className="submenu-items">
                <Link href="/play/plaza" className="submenu__item sub">
                  배라광장
                </Link>
                <Link href="/play/recipe" className="submenu__item sub">
                  BR레시피
                </Link>
                <Link href="/play/myflavor" className="submenu__item sub">
                  마이플레이버리스트
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* BR Story submenu */}
      {activeMenu === "brstory" && (
        <div
          className="submenu-bar"
          onMouseEnter={() => handleMouseEnter("brstory")}
        >
          <div className="submenu-bar__container">
            <Link href="/story/brandhistory" className="submenu__item">
              브랜드 스토리
            </Link>
            <Link href="/story/history" className="submenu__item">
              이달의 맛 히스토리
            </Link>
            <Link href="/story/bebetter" className="submenu__item">
              Be Better
            </Link>
          </div>
        </div>
      )}

      {/* DeliveryStore submenu */}
      {activeMenu === "deliveryStore" && (
        <div
          className="submenu-bar"
          onMouseEnter={() => handleMouseEnter("deliveryStore")}
        >
          <div className="submenu-bar__container column">
            <div className="submenu-column">
              <h4 className="submenu-title">Store</h4>
              <div className="submenu-items">
                <Link href="/store/map" className="submenu__item sub">
                  매장 찾기
                </Link>
                <Link href="/store/flavor" className="submenu__item sub">
                  100flavor 플래그십스토어
                </Link>
                <Link href="/store/workshop" className="submenu__item sub">
                  워크샵 by 배스킨라빈스
                </Link>
                <Link href="#" className="submenu__item sub">
                  점포개설문의
                </Link>
              </div>
            </div>
            <div className="submenu-column">
              <h4 className="submenu-title">Delivery</h4>
              <div className="submenu-items">
                <Link href="/store/delivery" className="submenu__item sub">
                  배달주문
                </Link>
                <Link href="/store/catering" className="submenu__item sub">
                  단체주문
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-container">
            <button
              className="close-button"
              onClick={handleSearchToggle}
              aria-label="닫기"
            >
              ×
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="제품명을 입력하세요"
            />
            <button className="search-submit" aria-label="검색">
              <Link
                href="/menu/menuview1"
                className="search-submit"
                aria-label="검색"
              >
                <img
                  src="/images/btn_search_big.png"
                  alt="검색"
                  width={24}
                  height={24}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
