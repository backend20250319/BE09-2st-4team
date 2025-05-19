import "@/styles/store/delivery/delivery-content.css";
export default function DeliveryContent() {
  return (
    <div className="delivery-content-container">
      <section>
        <header>
          <h3>배스킨라빈스 모바일 사전주문 서비스</h3>
          <p>
            배스킨라빈스와 함께하는 달콤한 시간<i>!</i> <br />
            모바일 앱을 통해 간편하게 주문, 결제와 배달 예약 서비스를 이용하세요
            <i>!</i>
          </p>
          <a
            href="https://www.happyorder.co.kr/"
            target="_blank"
            className="store-delivery__button"
            style={{ margin: "40px 0" }}
          >
            해피오더 주문하기
          </a>
        </header>
        <ul className="store-delivery__list">
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "130px 20px",
              backgroundImage: "url(/images/store/delivery/icon_list_1_1.png)",
            }}
          >
            <h4 className="store-delivery__item--title">
              모바일에서 주문은 여유롭게!
              <br />
              기다리는 시간은 슬림하게!
            </h4>
            <p className="store-delivery__item--content">
              해피오더를 통해 모바일로 주문하고 원하는 시간에 <br />
              픽업 또는 배달 서비스를 이용하세요!
            </p>
          </li>
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "center 53px",
              backgroundImage: "url(/images/store/delivery/icon_list_1_2.png)",
            }}
          >
            <h4 className="store-delivery__item--title">
              모임 또는 행사, 단체 <br />
              예약주문 서비스!
            </h4>
            <p className="store-delivery__item--content">
              원하는 날짜, 원하는 시간에 맞추어 <br />
              제품을 미리 예약주문하세요!
            </p>
          </li>
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "center 53px",
              backgroundImage: "url(/images/store/delivery/icon_list_1_3.png)",
            }}
          >
            <h4 className="store-delivery__item--title">
              쿠폰, 적립, 할인등 다양한 <br />
              멤버쉽 서비스!
            </h4>
            <p className="store-delivery__item--content">
              해피오더에서 제공되는 다양한 <br />
              쿠폰과 해피포인트 적립 서비스!
            </p>
          </li>
        </ul>
      </section>
      <section>
        <header>
          <h3>HOW TO ORDER</h3>
        </header>
        <ol className="store-delivery__list">
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "130px 63px",
              backgroundImage: "url(/images/store/delivery/icon_list_2_1.png)",
            }}
          >
            <p className="store-delivery__item--content">
              <span>STEP 1</span>
              해피앱에 접속 후, 해피마켓 해피오더에서 <br />
              원하시는 제품을 선택!
            </p>
          </li>
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "center 63px",
              backgroundImage: "url(/images/store/delivery/icon_list_2_2.png)",
            }}
          >
            <p className="store-delivery__item--content">
              <span>STEP 2</span>
              원하시는 제품과 옵션을 <br />
              선택 후 결제하면 주문 완료!
            </p>
          </li>
          <li
            className="store-delivery__item"
            style={{
              backgroundPosition: "center 90px",
              backgroundImage: "url(/images/store/delivery/icon_list_2_3.png)",
            }}
          >
            <p className="store-delivery__item--content">
              <span>STEP 3</span>
              원하시는 제품과 옵션을 <br />
              선택 후 결제하면 주문 완료!
            </p>
          </li>
        </ol>
      </section>
      <section>
        <header>
          <h3>모바일교환권 주문하기</h3>
          <p>
            카카오 기프티콘, 해피콘 등 모바일 쿠폰도 편리하게! <br />
            해피앱에서 주문, 배달을 할 수 있어요!
          </p>
        </header>
        <ol className="store-delivery__list">
          <li className="store-delivery__item">
            <h4 className="store-delivery__item--title">
              <span>1</span>
              해피오더 접속 및 주소 설정
            </h4>
            <p className="store-delivery__item--content">
              해피오더에 접속한 후 배달지 또는 픽업지 주소를
              <br />
              설정하세요
              <strong>
                *구글플레이 및 앱스토어에서 해피오더를 검색하고 다운받으세요
              </strong>
            </p>
          </li>
          <li className="store-delivery__item">
            <h4 className="store-delivery__item--title">
              <span>2</span>
              브랜드 및 주문유형 선택
            </h4>
            <p className="store-delivery__item--content">
              소지하고있는 모바일교환권 브랜드를 선택한 후 <br />
              원하는 주문유형(배달/픽업/예약)을선택하세요
              <strong>
                *SPC 통합권을 소지하고 계신 고객님은 원하시는 브랜드를
                선택하세요
              </strong>
            </p>
          </li>
          <li className="store-delivery__item">
            <h4 className="store-delivery__item--title">
              <span>3</span>
              매장 및 제품 선택
            </h4>
            <p className="store-delivery__item--content">
              원하는 매장과 제품을 선택하세요
              <strong>
                *소지하고 있는 모바일교환권 금액 이상의 제품에 한하여 <br />
                구매가능합니다.
              </strong>
            </p>
          </li>
          <li className="store-delivery__item">
            <h4 className="store-delivery__item--title">
              <span>4</span>
              결제하기에서 모바일교환권 코드입력
            </h4>
            <p className="store-delivery__item--content">
              할인정보에서 모바일교환권(교환권/해피콘)란에 <br />
              코드 입력 후 확인 버튼을 누르세요
              <strong>
                *일부 모바일교환권에 대해 적용이 불가할 수 있습니다.
              </strong>
            </p>
          </li>
          <li className="store-delivery__item">
            <h4 className="store-delivery__item--title">
              <span>5</span>
              결제하기
            </h4>
          </li>
        </ol>
      </section>
      <section>
        <header>
          <h3>
            해피오더 외에도 다양한 배달 앱에서 <br />
            배스킨라빈스를 만나보세요<i>!</i>
          </h3>
        </header>
        <ul className="store-delivery__list">
          <li className="store-delivery__item">
            <p>카카오톡 주문하기</p>
            <a
              href="https://order.kakao.com/etc/bridge?next=/brands/BRkorea"
              target="_blank"
              className="store-delivery__button"
            >
              주문하기
            </a>
          </li>
          <li className="store-delivery__item">
            <p>쿠팡이츠</p>
            <a
              href="https://share.coupangeats.com/ijTQ0ofHWfb"
              target="_blank"
              className="store-delivery__button"
            >
              주문하기
            </a>
          </li>
          <li className="store-delivery__item">
            <p>배달의 민족</p>
            <a
              href="https://baeminkr.onelink.me/XgL8/763121a"
              target="_blank"
              className="store-delivery__button"
            >
              주문하기
            </a>
          </li>
          <li className="store-delivery__item">
            <p>요기요</p>
            <a
              href="https://goo.gl/s7uxrP"
              target="_blank"
              className="store-delivery__button"
            >
              주문하기
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
