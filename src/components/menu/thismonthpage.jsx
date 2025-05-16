"use client";
import React from "react";
import "@/styles/menu/thismonthpage.css";

const ThisMonthPage = () => {
  return (
    <main className="month-page">
      <h2 className="month-title">5월 이달의 맛</h2>

      <section className="month-main-box">
        <div className="month-header">
          <h4 className="month-eng">ICE STRAWBERRY BANANA AND BEAR JELLY</h4>
          <h3 className="month-kor">봄날의 곰을 좋아하세요?</h3>
          <p className="month-desc">
            딸기&바나나 아이스크림 속 곰돌이 젤리! <br />
            인기 최고! 보기만 해도 귀여운 곰젤리 덩어리 가득!
          </p>
          <div className="month-icons">
            <div className="icon-item">
              <img src="/images/menu/thismonth/strawberry.png" alt="딸기" />
              <p>딸기</p>
            </div>
            <div className="icon-item">
              <img src="/images/menu/thismonth/banana.png" alt="바나나" />
              <p>바나나</p>
            </div>
            <div className="icon-item">
              <img src="/images/menu/thismonth/bearjelly.png" alt="곰 젤리" />
              <p>곰 젤리</p>
            </div>
          </div>
        </div>

        <div className="month-image">
          <img
            src="/images/menu/thismonth/poster.png"
            alt="봄날의 곰을 좋아하세요?"
          />
        </div>

        <div className="month-new-box">
          <p className="new-title">이달의 신제품</p>
          <div className="new-product">
            <img src="/images/menu/thismonth/icecreamcone.png" alt="신제품" />
            <p>봄날의 곰을 좋아하세요?</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThisMonthPage;
