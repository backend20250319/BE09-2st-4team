import "@/styles/store/flavor/flavor-content.css";

export default function () {
  return (
    <section className="store-flavor-flavor">
      <h3 className="store-flavor-flavor__title">
        <span></span>
      </h3>
      <ul className="store-flavor-flavor__list">
        <li className="store-flavor-flavor__item">
          <span className="store-flavor-flavor__item--visual"></span>
          <div>
            <h4 className="store-flavor-flavor__item--title">
              배라에서 만나는
              <br />
              아르데코 스타일의 공간
            </h4>
            <p className="store-flavor-flavor__item--content">
              글로벌 인테리어 디자인 브랜드 오스모스
              <br />
              (OSMOSE)사와 협업해 우아한 라인과 기하학적
              <br />
              디자인의 아르데코 스타일을 현대적으로 구현했습니다.
              <br />
              아트슈머까지 만족시킬 예술적인 인테리어가
              <br />
              돋보이는 공간입니다.
            </p>
          </div>
        </li>
        <li className="store-flavor-flavor__item">
          <span className="store-flavor-flavor__item--visual"></span>
          <div>
            <h4 className="store-flavor-flavor__item--title">
              취향대로 고르는
              <br />
              100가지 아이스크림
            </h4>
            <p className="store-flavor-flavor__item--content">
              해외 인기 플레이버와 이달의 맛으로 선보였던 히트 메뉴,
              <br />
              트렌드를 반영한 오가닉 및 저칼로리라인과 파르나스몰점의
              <br />
              시그니처 플레이버 등 풍성하게 준비된 아이스크림
              <br />
              컬렉션을 즐겨보세요.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
