// app/menuview/page.jsx
"use client";
import Image from "next/image";
import React from "react";
import "@/styles/menu/menuviewpage0.css";
import Link from "next/link";

const MenuView = () => {
  return (
    <main className="menuview-wrapper">
      <div className="menuview-image">
        {/* 아이스크림 + 콘 겹치기 구조 */}
        <div className="icecream-stack">
          <img
            src="/images/menu/menuview/icon_size/cone.png"
            alt="콘"
            className="cone-img"
          />
          <img
            src="/images/menu/icecream/icecream-1.png"
            alt="아이스크림"
            className="icecream-img"
          />
        </div>
      </div>

      <div className="menuview-content">
        <p className="menuview-category">ICECREAM</p>
        <h2 className="menuview-title-en">
          ICE STRAWBERRY BANANA AND BEAR JELLY
        </h2>
        <h1 className="menuview-title-kr">봄날의 곰을 좋아하세요?</h1>
        <p className="menuview-desc">
          달콤상큼한 딸기와 바나나의 만남! 딸기&바나나퓨레 리본과
          <br />
          귀여운 곰돌이 젤리가 콕콕!
        </p>
        <div className="menuview-icons">
          <div className="ingredient">
            <Image
              src="/images/menu/menuview/icecream1/strawberry.png"
              alt="딸기"
              width={40}
              height={40}
            />
            <p>딸기</p>
          </div>
          <div className="ingredient">
            <Image
              src="/images/menu/menuview/icecream1/banana.png"
              alt="바나나"
              width={40}
              height={40}
            />
            <p>바나나</p>
          </div>
          <div className="ingredient">
            <Image
              src="/images/menu/menuview/icecream1/gummybear.png"
              alt="곰 젤리"
              width={40}
              height={40}
            />
            <p>곰 젤리</p>
          </div>
        </div>
      </div>
      <div className="menuview-bottom">
        {/* 영양정보 섹션 추가 */}
        <div className="nutrition-info">
          <h2 className="nutrition-title">영양정보</h2>
          <div className="nutrition-table">
            <div className="nutrition-item">
              <p>1회 제공량</p>
              <strong>115</strong>
            </div>
            <div className="nutrition-item">
              <p>열량(kcal)</p>
              <strong>210</strong>
            </div>
            <div className="nutrition-item">
              <p>당류(g)</p>
              <strong>31</strong>
            </div>
            <div className="nutrition-item">
              <p>단백질(g)</p>
              <strong>3</strong>
            </div>
            <div className="nutrition-item">
              <p>포화지방(g)</p>
              <strong>5</strong>
            </div>
            <div className="nutrition-item">
              <p>나트륨(mg)</p>
              <strong>73</strong>
            </div>
            <div className="nutrition-item">
              <p>알레르기 성분</p>
              <strong>우유</strong>
            </div>
          </div>

          {/* 포스터 */}
          <div className="poster">
            <img
              src="/images/menu/menuview/icecream1/poster.png"
              alt="포스터"
              className="poster-image"
            />
          </div>
        </div>

        {/* 사이즈 컬렉 */}
        <div className="size-section">
          <h2 className="size-title">SELECT SIZE</h2>

          <div className="size-category">
            <h3 className="size-subtitle">CONE & CUP</h3>
            <div className="size-grid">
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_1.png"
                  alt="싱글레귤러"
                />
                <p className="size-name">싱글레귤러</p>
                <p className="size-desc">1가지 맛 (중량 115g)</p>
                <p className="size-price">3,900원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_2.png"
                  alt="싱글킹"
                />
                <p className="size-name">싱글킹</p>
                <p className="size-desc">1가지 맛 (중량 145g)</p>
                <p className="size-price">4,700원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_3.png"
                  alt="더블주니어"
                />
                <p className="size-name">더블주니어</p>
                <p className="size-desc">2가지 맛 (중량 150g)</p>
                <p className="size-price">5,100원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_4.png"
                  alt="더블레귤러"
                />
                <p className="size-name">더블레귤러</p>
                <p className="size-desc">2가지 맛 (중량 230g)</p>
                <p className="size-price">7,300원</p>
              </div>
            </div>
          </div>

          <div className="size-category">
            <h3 className="size-subtitle">HAND PACK</h3>
            <div className="size-grid">
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_1.png"
                  alt="파인트"
                />
                <p className="size-name">파인트</p>
                <p className="size-desc">3가지 맛 (중량 320g)</p>
                <p className="size-price">9,800원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_2.png"
                  alt="쿼터"
                />
                <p className="size-name">쿼터</p>
                <p className="size-desc">4가지 맛 (중량 620g)</p>
                <p className="size-price">18,500원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_3.png"
                  alt="패밀리"
                />
                <p className="size-name">패밀리</p>
                <p className="size-desc">5가지 맛 (중량 960g)</p>
                <p className="size-price">26,000원</p>
              </div>
              <div className="size-item">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_4.png"
                  alt="하프갤론"
                />
                <p className="size-name">하프갤론</p>
                <p className="size-desc">6가지 맛 (중량 1200g)</p>
                <p className="size-price">31,500원</p>
              </div>
            </div>
          </div>

          <p className="size-note">
            * 일부 제품에 한해 가격이 상이할 수 있습니다.
          </p>
        </div>

        <div className="recommend-section">
          <div className="recommend-header">
            <h2 className="recommend-main-title">BR 추천 조합</h2>
            <span className="recommend-line">
              마이 플레이버 리스트 맛 조합 추천
            </span>
          </div>

          <Link href="/play/myflavor" className="recommend-box-link">
            <div className="recommend-box">
              <div className="recommend-text">
                <p className="recommend-sub">
                  더 다양한 맛 조합이 보고 싶다면?
                  <br />
                  내가 추천하는 조합이 있다면?
                </p>
                <p className="recommend-title">
                  마이 플레이버리스트 <span className="arrow">›</span>
                </p>
              </div>
              <img
                src="/images/menu/menuview/icon_size/icon_mixture_default.png"
                alt="마이 플레이버리스트"
                className="recommend-img"
              />
            </div>
          </Link>
        </div>

        <div className="side-preview-container">
          <Link href="/menu/menuview1" className="side-preview-text">
            아이 원-츄! <span className="arrow">›</span>
          </Link>
          <div className="side-preview-wrapper">
            <div className="side-preview-image">
              <img
                src="/images/menu/icecream/icecream-2.png"
                alt="사이드 아이스크림"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuView;
