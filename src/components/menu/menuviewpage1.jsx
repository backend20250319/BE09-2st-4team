"use client";
import Image from "next/image";
import React from "react";
import "@/styles/menu/menuviewpage1.css";
import Link from "next/link";

const MenuView2 = () => {
  return (
    <main className="menuview-wrapper1">
      <div className="menuview-image1">
        <div className="icecream-stack1">
          <img
            src="/images/menu/menuview/icon_size/cone.png"
            alt="콘"
            className="cone-img1"
          />
          <img
            src="/images/menu/icecream/icecream-2.png"
            alt="아이스크림"
            className="icecream-img1"
          />
        </div>
      </div>

      <div className="menuview-content1">
        <p className="menuview-category1">ICECREAM</p>
        <h2 className="menuview-title-en1">I want CHU!</h2>
        <h1 className="menuview-title-kr1">아이 원-츄!</h1>
        <p className="menuview-desc1">
          부드러운 우유 아이스크림 속 달콤한 초콜릿 &<br />
          츄러스가 쏘옥!
        </p>

        <div className="menuview-icons1">
          <div className="ingredient1">
            <Image
              src="/images/menu/menuview/icecream2/chocolate.png"
              alt="초콜릿"
              width={40}
              height={40}
            />
            <p>초콜릿</p>
          </div>
          <div className="ingredient1">
            <Image
              src="/images/menu/menuview/icecream2/milk.png"
              alt="우유"
              width={40}
              height={40}
            />
            <p>우유</p>
          </div>
          <div className="ingredient1">
            <Image
              src="/images/menu/menuview/icecream2/churros.png"
              alt="츄러스"
              width={40}
              height={40}
            />
            <p>츄러스</p>
          </div>
        </div>
      </div>

      <div className="menuview-bottom1">
        <div className="nutrition-info1">
          <h2 className="nutrition-title1">영양정보</h2>
          <div className="nutrition-table1">
            <div className="nutrition-item1">
              <p>1회 제공량</p>
              <strong>115</strong>
            </div>
            <div className="nutrition-item1">
              <p>열량(kcal)</p>
              <strong>322</strong>
            </div>
            <div className="nutrition-item1">
              <p>당류(g)</p>
              <strong>34</strong>
            </div>
            <div className="nutrition-item1">
              <p>단백질(g)</p>
              <strong>4</strong>
            </div>
            <div className="nutrition-item1">
              <p>포화지방(g)</p>
              <strong>10</strong>
            </div>
            <div className="nutrition-item1">
              <p>나트륨(mg)</p>
              <strong>174</strong>
            </div>
            <div className="nutrition-item1">
              <p>알레르기 성분</p>
              <strong>우유, 대두, 밀</strong>
            </div>
          </div>
          <div className="poster1">
            <img
              src="/images/menu/menuview/icecream2/poster.png"
              alt="포스터"
              className="poster-image1"
            />
          </div>
        </div>

        <div className="size-section1">
          <h2 className="size-title1">SELECT SIZE</h2>

          <div className="size-category1">
            <h3 className="size-subtitle1">CONE & CUP</h3>
            <div className="size-grid1">
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_1.png"
                  alt="싱글레귤러"
                />
                <p className="size-name1">싱글레귤러</p>
                <p className="size-desc1">1가지 맛 (중량 115g)</p>
                <p className="size-price1">3,900원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_2.png"
                  alt="싱글킹"
                />
                <p className="size-name1">싱글킹</p>
                <p className="size-desc1">1가지 맛 (중량 145g)</p>
                <p className="size-price1">4,700원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_3.png"
                  alt="더블주니어"
                />
                <p className="size-name1">더블주니어</p>
                <p className="size-desc1">2가지 맛 (중량 150g)</p>
                <p className="size-price1">5,100원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_c_4.png"
                  alt="더블레귤러"
                />
                <p className="size-name1">더블레귤러</p>
                <p className="size-desc1">2가지 맛 (중량 230g)</p>
                <p className="size-price1">7,300원</p>
              </div>
            </div>
          </div>

          <div className="size-category1">
            <h3 className="size-subtitle1">HAND PACK</h3>
            <div className="size-grid1">
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_1.png"
                  alt="파인트"
                />
                <p className="size-name1">파인트</p>
                <p className="size-desc1">3가지 맛 (중량 320g)</p>
                <p className="size-price1">9,800원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_2.png"
                  alt="쿼터"
                />
                <p className="size-name1">쿼터</p>
                <p className="size-desc1">4가지 맛 (중량 620g)</p>
                <p className="size-price1">18,500원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_3.png"
                  alt="패밀리"
                />
                <p className="size-name1">패밀리</p>
                <p className="size-desc1">5가지 맛 (중량 960g)</p>
                <p className="size-price1">26,000원</p>
              </div>
              <div className="size-item1">
                <img
                  src="/images/menu/menuview/icon_size/icon_size_hp_4.png"
                  alt="하프갤론"
                />
                <p className="size-name1">하프갤론</p>
                <p className="size-desc1">6가지 맛 (중량 1200g)</p>
                <p className="size-price1">31,500원</p>
              </div>
            </div>
          </div>

          <p className="size-note1">
            * 일부 제품에 한해 가격이 상이할 수 있습니다.
          </p>
        </div>

        <div className="recommend-section1">
          <div className="recommend-header1">
            <h2 className="recommend-main-title1">BR 추천 조합</h2>
            <span className="recommend-line1">
              마이 플레이버 리스트 맛 조합 추천
            </span>
          </div>

          <Link href="/play/myflavor" className="recommend-box-link1">
            <div className="recommend-box1">
              <div className="recommend-text1">
                <p className="recommend-sub1">
                  더 다양한 맛 조합이 보고 싶다면?
                  <br />
                  내가 추천하는 조합이 있다면?
                </p>
                <p className="recommend-title1">
                  마이 플레이버리스트 <span className="arrow1">›</span>
                </p>
              </div>
              <img
                src="/images/menu/menuview/icon_size/icon_mixture_default.png"
                alt="마이 플레이버리스트"
                className="recommend-img1"
              />
            </div>
          </Link>
        </div>

        <div className="side-preview-container1">
          <Link href="/menuview2" className="side-preview-text1">
            아이스 칸탈로프 멜로 <span className="arrow1">›</span>
          </Link>
          <div className="side-preview-wrapper1">
            <div className="side-preview-image1">
              <img
                src="/images/menu/icecream/icecream-3.png"
                alt="사이드 아이스크림"
              />
            </div>
          </div>
        </div>

        {/* 왼쪽 메뉴 이동 버튼 (예: menuview0으로 이동) */}
        <div className="side-preview-container1 left">
          <div className="side-preview-wrapper1">
            <div className="side-preview-image1">
              <img
                src="/images/menu/icecream/icecream-1.png"
                alt="이전 아이스크림"
              />
            </div>
          </div>
          <Link href="/menu/menuview0" className="side-preview-text1">
            <span className="arrow1">‹</span> 봄날의 곰을 좋아하세요?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MenuView2;
