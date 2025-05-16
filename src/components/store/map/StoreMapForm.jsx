"use client";
export default function StoreMapForm() {
  return (
    <div>
      <form action="" className="store-map-form" data-gtm-form-interact-id="0">
        <fieldset className="store-map-form__fieldset">
          <legend>매장 찾기</legend>

          <div className="store-map-option">
            <button
              type="button"
              className="store-map__button store-map-option__button"
            >
              옵션 선택
            </button>

            <div className="store-map-option__content">
              <dl className="store-map-option__list">
                <div className="store-map-option__item store-type">
                  <dt className="store-map-option__name">매장타입</dt>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="store_type"
                        value="A"
                      />
                      <span className="store-map-option__text">BR 31</span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="store_type"
                        value="B"
                      />
                      <span className="store-map-option__text">100flavor</span>
                    </label>
                  </dd>
                </div>
                <div className="store-map-option__item service-info">
                  <dt className="store-map-option__name">제공 서비스</dt>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="A"
                      />
                      <span className="store-map-option__text">주차</span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="B"
                      />
                      <span className="store-map-option__text">배달</span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="C"
                      />
                      <span className="store-map-option__text">픽업</span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="D"
                      />
                      <span className="store-map-option__text">취식여부</span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="E"
                      />
                      <span className="store-map-option__text">
                        해피스테이션
                      </span>
                    </label>
                  </dd>
                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="F"
                      />
                      <span className="store-map-option__text">가챠머신</span>
                    </label>
                  </dd>

                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="I"
                      />
                      <span className="store-map-option__text">KT 제휴</span>
                    </label>
                  </dd>

                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="J"
                      />
                      <span className="store-map-option__text">SKT 제휴</span>
                    </label>
                  </dd>

                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="K"
                      />
                      <span className="store-map-option__text">LGU+ 제휴</span>
                    </label>
                  </dd>

                  <dd className="store-map-option__area">
                    <label className="store-map-option__label">
                      <input
                        type="checkbox"
                        className="store-map-option__input"
                        name="service_info"
                        value="L"
                      />
                      <span className="store-map-option__text">
                        맛보기 제휴
                      </span>
                    </label>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="store-map-city">
            <select
              name="sido"
              className="store-map__button store-map-city__select dosi"
              data-gtm-form-interact-field-id="0"
            >
              <option value="">도/시 선택</option>
              <option value="강원특별자치도">강원특별자치도</option>
              <option value="경기">경기</option>
              <option value="경남">경남</option>
              <option value="경북">경북</option>
              <option value="광주">광주</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="부산">부산</option>
              <option value="서울">서울</option>
              <option value="세종특별자치시">세종특별자치시</option>
              <option value="울산">울산</option>
              <option value="인천">인천</option>
              <option value="전남">전남</option>
              <option value="전북">전북</option>
              <option value="제주특별자치도">제주특별자치도</option>
              <option value="충남">충남</option>
              <option value="충북">충북</option>
            </select>
            <select
              name="gugun"
              className="store-map__button store-map-city__select gugun"
            >
              <option value="">구/군 선택</option>
              <option value="가평군">가평군</option>
              <option value="고양시">고양시</option>
              <option value="과천시">과천시</option>
              <option value="광명시">광명시</option>
              <option value="광주시">광주시</option>
              <option value="구리시">구리시</option>
              <option value="군포시">군포시</option>
              <option value="김포시">김포시</option>
              <option value="남양주시">남양주시</option>
              <option value="동두천시">동두천시</option>
              <option value="부천시">부천시</option>
              <option value="성남시">성남시</option>
              <option value="수원시">수원시</option>
              <option value="시흥시">시흥시</option>
              <option value="안산시">안산시</option>
              <option value="안성시">안성시</option>
              <option value="안양시">안양시</option>
              <option value="양주시">양주시</option>
              <option value="양평군">양평군</option>
              <option value="여주시">여주시</option>
              <option value="연천군">연천군</option>
              <option value="오산시">오산시</option>
              <option value="용인시">용인시</option>
              <option value="의왕시">의왕시</option>
              <option value="의정부시">의정부시</option>
              <option value="이천시">이천시</option>
              <option value="파주시">파주시</option>
              <option value="평택시">평택시</option>
              <option value="포천시">포천시</option>
              <option value="하남시">하남시</option>
              <option value="화성시">화성시</option>
            </select>
          </div>
        </fieldset>

        <div className="store-map-input">
          <input
            type="text"
            placeholder="매장명"
            className="store-map-input__input store-name"
            name="store_name"
            data-gtm-form-interact-field-id="1"
            value=""
            onChange={() => {}}
          />
        </div>

        <button type="submit" className="store-map__submit">
          검색
        </button>
      </form>
    </div>
  );
}
