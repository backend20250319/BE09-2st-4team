"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/story/bebetter/bebetter.css";
import "@/styles/story/bebetter/modal.css";

export default function BeBetterPage() {
  return (
    <main className="bebetter-wrapper3">
      <div className="breadcrumb">
        <Link href="/story/history" className="breadcrumbbar">
          브랜드 스토리
        </Link>
        <span className="divider">|</span>
        <Link href="/story/history" className="breadcrumbbar">
          이달의 맛 히스토리
        </Link>
        <span className="breadcrumbbar active1">Be Better</span>
      </div>

      <h1 className="bebetter-title">Be Better</h1>
      <p className="bebetter-desc">
        배라가 사회와 함께 만드는 방법.<br></br>가치 있는 같이
      </p>

      <section className="bebetter-section">
        {/* 핑크드림 카드 */}
        <div className="bebetter-card">
          <Image
            src="/images/story/BeBetterPage/img_dream.png"
            alt="핑크드림"
            width={550}
            height={450}
            className="bebetter-image"
          />
          <div className="bebetter-text">
            <p className="bebetter-blocksidetitle1">핑크드림 캠페인이란?</p>
            <div className="card-header">
              <h4 className="highlight-red">
                배라와 소비자가 함께 만드는 따뜻한 31데이!
              </h4>
              <a rel="noopener noreferrer" className="more-link red">
                더보기
              </a>
            </div>
            <p className="detail">
              핑크드림 캠페인은 브랜드와 소비자가 함께 <br></br> 도움이 필요한
              이웃을 지원하는 사회공헌 활동입니다.<br></br> 배스킨라빈스는
              2023년부터 핑크드림 캠페인의 일환으로 월드비전과 협업해<br></br>{" "}
              브랜드의 대표적 행사인 '31데이' 수익의 3.1%를 기부금으로 적립하고
              있습니다.
            </p>
            <div className="check-list">
              <div className="check-item">
                <Image
                  src="/images/story/BeBetterPage/icon_check.jpg"
                  alt="check"
                  width={550}
                  height={450}
                  className="check-icon"
                />
                <div className="content1">
                  31명의 자립준비청년 선발해 생애최초 종합건강검진 및 장학금
                  지원
                </div>
              </div>
              <div className="check-item">
                <Image
                  src="/images/story/BeBetterPage/icon_check.jpg"
                  alt="check"
                  width={25}
                  height={20}
                  className="check-icon"
                />
                <div className="content1">
                  자립준비청년 대상 주거 환경 개선비 및 역량강화 교육비 지급
                </div>
              </div>
              <div className="check-item">
                <Image
                  src="/images/story/BeBetterPage/icon_check.jpg"
                  alt="check"
                  width={25}
                  height={20}
                  className="check-icon"
                />
                <div className="content1">
                  핑크스푼 업사이클링 및 어린이 놀이 정원 환경 조성 사업 진행
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 핑크팜 카드 */}
        <div className="bebetter-card">
          <Image
            src="/images/story/BeBetterPage/img_farm.png"
            alt="핑크팜"
            width={550}
            height={450}
            className="bebetter-image"
          />

          <div className="bebetter-text">
            <p className="bebetter-blocksidetitle2">핑크팜 캠페인이란?</p>
            <div className="card-header">
              <h2 className="highlight-brown">지역 농가 상생 프로젝트</h2>
              <a rel="noopener noreferrer" className="more-link brown">
                더보기
              </a>
            </div>
            <p className="detail">
              핑크팜 캠페인은 배스킨라빈스와 지역농가 청년농부지원을 위한
              콜라보레이션<br></br>
              상생 프로젝트 입니다. 지역농가 지원을 위한 상품개발부터 원료
              수급,특화 제품 개발,<br></br>
              홍보까지 지역농가 지원을 위한캠페인을 진행하고 있습니다.
            </p>
            <div className="check-list">
              <div className="check-item">
                <Image
                  src="/images/story/BeBetterPage/icon_check.jpg"
                  alt="check"
                  width={25}
                  height={20}
                  className="check-icon"
                />
                <div className="content2">
                  지역농가, 청년농부 지원 콜라보레이션 제품 출시
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bebetter-card">
          <Image
            src="/images/story/BeBetterPage/img_link.png"
            alt="핑크링크"
            width={550}
            height={450}
            className="bebetter-image"
          />
          <div className="bebetter-text">
            <p className="bebetter-blocksidetitle3">핑크링크 캠페인이란?</p>
            <div className="card-header">
              <h2 className="highlight-green">중소 기업 콜라보 프로젝트</h2>
              <a rel="noopener noreferrer" className="more-link green">
                더보기
              </a>
            </div>
            <p className="detail">
              핑크링크 캠페인은 배스킨라빈스에서 중소기업 지원을 위해 진행하는
              <br></br>
              콜라보레이션 상생 프로젝트입니다. 제품 개발부터, 전국 매장 제품
              출시 및 광고 지원까지<br></br>
              중소기업과 함께 상생하기 위해 노력합니다.
            </p>
            <div className="check-list">
              <div className="check-item">
                <Image
                  src="/images/story/BeBetterPage/icon_check.jpg"
                  alt="check"
                  width={1}
                  height={1}
                  className="check-icon"
                />
                <div className="content3">중소기업 콜라보레이션 제품 출시</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
