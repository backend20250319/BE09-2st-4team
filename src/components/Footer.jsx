"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className="br-footer">
      <div className="br-footer-top-links">
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/store-offer/offer.php">
            신규 직영점 입점제의
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/consulting/br.php">
            점포개설문의
          </a>
        </span>
        <span className="highlight">
          <a href="https://spc.recruiter.co.kr/career/home">채용문의</a>
        </span>
        <span className="highlight">
          <a href="https://www.spc.co.kr/esg/report">윤리신고센터</a>
        </span>
        <span className="highlight">
          <a href="https://www.happypointcard.com/page/customer/term.spc">
            해피포인트카드 이용약관
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/customer/policy-reword.php">
            배스킨라빈스 리워드 이용약관
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/customer/policy.php">
            개인정보처리방침
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/customer/policy-cctv.php">
            영상정보처리기기운영관리방침
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/customer/safety-management.php">
            안전보건 경영방침
          </a>
        </span>
        <span className="highlight">
          <a href="https://www.baskinrobbins.co.kr/information-center/fairtrade/list.php">
            공정거래자율준수
          </a>
        </span>
        <span className="highlight">
          <a href="https://happy.spc.co.kr/indexframe.jsp">
            거래희망회사 사전등록
          </a>
        </span>
      </div>

      <div className="br-footer-inner">
        <div className="br-footer-main">
          <div className="br-footer-logo-col">
            <img
              src="/images/Footer/h_logo_2.png"
              alt="BR Logo"
              className="br-footer-logo"
            />
            <div className="br-footer-company">
              사업자 등록번호 : 303-81-09535
              <br />
              비알코리아(주) 대표이사 도세호
              <br />
              서울특별시 서초구 남부순환로 2620(양재동 11-149번지)
              <br />
              TEL : 080-555-3131
              <br />
              개인정보보호책임자 : 김민석/상무
            </div>
            <div className="br-footer-copyright">
              Copyright ⓒ 2023 BRKOREA Company. All Rights Reserved.
            </div>
          </div>

          <div className="br-footer-links-grid">
            <div>
              <div className="br-footer-link-title">Menu</div>
              <div className="br-footer-link-item">
                <Link href="/menu/thismonth">이달의 맛</Link>
              </div>
              <div className="br-footer-link-item">아이스크림</div>
              <div className="br-footer-link-item">프리팩</div>
              <div className="br-footer-link-item">아이스크림 케이크</div>
              <div className="br-footer-link-item">디저트</div>
              <div className="br-footer-link-item">음료</div>
              <div className="br-footer-link-item">커피</div>
            </div>
            <div>
              <div className="br-footer-link-title">BR Play</div>
              <div className="br-footer-link-item">
                <Link href="/play">이벤트</Link>
              </div>
              <div className="br-footer-link-item">배라광장</div>
              <div className="br-footer-link-item">BR레시피</div>
              <div className="br-footer-link-item">마이플레이버리스트</div>
            </div>
            <div>
              <div className="br-footer-link-title">BR Story</div>
              <div className="br-footer-link-item"></div>
              <div className="br-footer-link-item">
                <Link href="/story/history">이달의 맛 히스토리</Link>
              </div>
              <div className="br-footer-link-item">
                <Link href="/story/bebetter">Be Better</Link>
              </div>
            </div>
            <div>
              <div className="br-footer-link-title">Delivery/Store</div>
              <div className="br-footer-link-item">
                <Link href="/store/map">매장찾기</Link>
              </div>
              <div className="br-footer-link-item">
                100flavor 플래그십스토어
              </div>
              <div className="br-footer-link-item">워크샵 by 배스킨라빈스</div>
              <div className="br-footer-link-item">점포개설문의</div>
              <div className="br-footer-link-item">배달주문</div>
              <div className="br-footer-link-item">단체주문</div>
            </div>
            <div>
              <div className="br-footer-link-title">Information Center</div>
              <div className="br-footer-link-item">고객센터</div>
              <div className="br-footer-link-item">소비자중심경영(CCM)</div>
              <div className="br-footer-link-item">칭찬점포</div>
              <div className="br-footer-link-item">공지사항</div>
              <div className="br-footer-link-item">보도자료</div>
              <div className="br-footer-link-item">공정거래자율준수</div>
            </div>
          </div>
        </div>

        <div className="br-footer-bottom">
          <div className="br-footer-certifications">
            <a href="https://www.happypointcard.com/page/main/index.spc">
              <img src="/images/Footer/btn_happy_point.png" alt="해피포인트" />
            </a>
            <a href="https://market-web.happypointcard.com/">
              <img src="/images/Footer/btn_happy_market.png" alt="해피마켓" />
            </a>
            <a href="https://www.spc.co.kr/share/spc-foundation/introduction/">
              <img src="/images/Footer/btn_spc_story.png" alt="SPC" />
            </a>
            <div className="br-footer-small-icon">
              <a href="https://knqa.ksa.or.kr/knqa/2276/subview.do">
                <img src="/images/Footer/btn_ksa.png" alt="KSA" />
              </a>
              <a href="https://www.kca.go.kr/ccm/">
                <img src="/images/Footer/btn_ccm2.png" alt="CCM" />
              </a>
            </div>
          </div>

          <div className="br-footer-sns-and-site">
            <div className="br-footer-icons">
              <a href="https://www.instagram.com/baskinrobbinskorea/">
                <img src="/images/Footer/btn_instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCdUlCaxi7gx9Q-WDVDe30YA">
                <img src="/images/Footer/btn_youtube.png" alt="YouTube" />
              </a>
              <a href="https://www.facebook.com/baskinrobbinskr/?locale=ko_KR">
                <img src="/images/Footer/btn_facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.brmagazine.co.kr/">
                <img src="/images/Footer/btn_magazine.png" alt="BR" />
              </a>
            </div>

            <div className="br-footer-family-wrapper">
              <div
                className="br-footer-family-site"
                onClick={toggleDropdown}
                role="button"
              >
                FAMILY SITE {isDropdownOpen ? "▴" : "▾"}
              </div>

              {isDropdownOpen && (
                <ul className="br-footer-family-dropdown">
                  <li>
                    <a
                      href="https://www.spc.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SPC그룹사이트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.spcmagazine.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SPC MAGAZINE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.happypointcard.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      해피포인트카드
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pastry.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      파스쿠찌
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.samlip.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      삼립
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.paris.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      파리바게트
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.dunkindonuts.co.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      던킨도너츠
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
