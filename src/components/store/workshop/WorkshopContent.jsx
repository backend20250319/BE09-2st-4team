import "@/styles/store/workshop/workshop-content.css";

export default function WorkshopContent() {
  return (
    <div className="store-workshop">
      <div className="store-workshop__container">
        <div className="store-workshop__content">
          <section className="store-workshop__top">
            <img
              src="/images/store/workshop/top.png"
              alt="Workshop by baskinrobbins"
            />
          </section>
          <section className="store-workshop__list">
            <ul>
              <li>
                <img
                  src="/images/store/workshop/best.png"
                  alt="Best &amp; Exclusive Flavors"
                />
                <div className="store-workshop__text">
                  <h3>Best &amp; Exclusive Flavors</h3>
                  <p>
                    오직 워크샵에서만 만날 수 있는
                    <br />
                    특별한 플레이버와 스토리
                  </p>
                </div>
              </li>
              <li>
                <img
                  src="/images/store/workshop/chef.png"
                  alt="Chef’s Made Ice Cream Cake"
                />
                <div className="store-workshop__text">
                  <h3>Chef’s Made Ice Cream Cake</h3>
                  <p>
                    처음부터 끝까지 셰프의 손으로 완성한
                    <br />
                    프리미엄 시그니처 케이크
                  </p>
                </div>
              </li>
              <li>
                <img
                  src="/images/store/workshop/premium.png"
                  alt="Premium Italian Gelato"
                />
                <div className="store-workshop__text">
                  <h3>Premium Italian Gelato</h3>
                  <p>
                    원료를 선별하여 만든
                    <br />
                    이탈리안 정통의 수제 젤라또
                  </p>
                </div>
              </li>
              <li>
                <img
                  src="/images/store/workshop/barista.png"
                  alt="Barista’s Coffee &amp; Beverage"
                />
                <div className="store-workshop__text">
                  <h3>Barista’s Coffee &amp; Beverage</h3>
                  <p>
                    바리스타가 발견한 브랜딩과
                    <br />
                    베리에이션 노하우
                  </p>
                </div>
              </li>
              <li>
                <img
                  src="/images/store/workshop/special.png"
                  alt="Special Curated Gift"
                />
                <div className="store-workshop__text">
                  <h3>Special Curated Gift</h3>
                  <p>
                    받는 사람의 취향까지 담은
                    <br />
                    아이스크림 디저트 기프트
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="store-workshop__docent">
            <div className="program">
              <h3>Ice cream 도슨트 프로그램</h3>
              <h4>워크샵을 더 스페셜하게 즐기는 방법!</h4>
              <p>
                브랜드 스토리텔러 ‘닥터’가 들려주는
                <br />
                배스킨라빈스의 비하인드 스토리와 아이스크림 테이스팅 기회까지!
              </p>
            </div>
            <img
              src="/images/store/workshop/docent.png"
              alt="Ice cream Docent Program"
            />
            <div className="time">
              <div className="hours">운영시간</div>
              <div className="box">
                <div>
                  <div className="title">평일</div>
                  <div>11:00 ~ 11:30</div>
                  <div>15:00 ~ 15:30</div>
                  <div>17:00 ~ 17:30</div>
                </div>
                <img src="/images/store/workshop/line.png" />
                <div>
                  <div className="title">주말</div>
                  <div>12:00 ~ 12:30</div>
                  <div>17:00 ~ 17:30</div>
                </div>
              </div>
              <a
                href="https://booking.naver.com/booking/6/bizes/1085740/items/5688631?theme=place&amp;area=pll"
                target="_blank"
                title="도슨트 프로그램 예약하러 가기"
              >
                도슨트 프로그램 예약하러 가기
                <img src="/images/store/workshop/arrow.png" />
              </a>
            </div>
          </section>
          <section className="store-workshop__map">
            <div className="title">
              <img
                src="/images/store/workshop/map_title.png"
                alt="Workshop by baskinrobbins"
              />
            </div>
            <div className="box">
              <h3>오시는길</h3>
              <p>서울특별시 강남구 논현로 201 SPC2023 1층</p>
            </div>
            <div className="map">
              <img src="/images/store/workshop/map.png" alt="map" />
            </div>
            <div className="box">
              <h3>영업시간</h3>
              <p>평일 : 07:30 - 22:00</p>
              <p>금요일 : 07:30 - 23:00</p>
              <p>주말, 공휴일 : 10:00 - 23:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
