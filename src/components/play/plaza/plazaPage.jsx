import React from "react";
import styles from "./plazaPage.module.css";

const menuItems = ["이벤트", "배라광장", "BR 레시피", "마이플레이어 리스트"];

const topCards = [
  {
    bgColor: "#f9d6dd",
    titleSmall: "내가 만드는 맛이 31가지 아이스크림이 된다고?",
    titleMain: "내가 만드는 아이스크림",
    button1: "만들어주세요",
  },
  {
    bgColor: "#f4dfc5",
    titleSmall: '우리 브랜드를 "널리널리" 알리고 싶은 기업 모여라',
    titleMain: "중소기업 콜라보레이션",
    button1: "우리와 함께해요",
  },
  {
    bgColor: "#bbdefb",
    titleSmall: "배라와의 시작 배라로의 시작",
    titleMain: "점포개설 문의",
    button1: "동행을 희망해요",
    button2: "더 알아보기",
  },
];

const cardsData = [
  {
    id: 1,
    title: "허니치즈트랩 재출시",
    content:
      "매년 겨울마다 출시되었던 저의 최애아이스크림 허니치즈트랩이 이번년도 겨울엔 나오지 않잖아요😭😭😭 이거찍게 겨울이 되면 배라 맨날 갈건데도요... 이제는",
    author: "eas***님",
  },
  {
    id: 2,
    title: "라즈베리 먹고 싶어요..",
    content:
      "라즈베리 맛을 좋아하는데, 저희 동네 매장에는 잘 없어요. 많이 만들어 주세요.",
    author: "ii***님",
  },
  {
    id: 3,
    title: "쿠키앤크림치즈",
    content:
      "쿠키앤크림치즈 2019년인가 20년에 청 출시되었을 때 그 바버섯 그 뒤로 그간아 현상 망다가 맛훼쉘이어서 사갔는데 진짜 슬펐는데 언제부터 첨다르라리아랑 삼성 파르나스몰 매장..",
    author: "pde***님",
  },
  {
    id: 4,
    title: "찰떡콩떡 재출시 될까요ㅠㅠㅠㅠ",
    content:
      "찰떡콩떡 재출시 희망합니다 너무 먹고싶은데 인기가 없는지 안나와요ㅠㅠㅠㅠㅠ 출시해주세요",
    author: "jmg***님",
  },
  {
    id: 5,
    title: "우유속에끼인소보로",
    content:
      "재출시해주세요 ㅠㅠㅠㅠㅠㅠ 지팝 먹고싶어 죽겠습니다. 매년매년 놀랄락할 겨울때마다 이 맛 나오면 좋겠다고 간절히 기도하고있어요..",
    author: "gus***님",
  },
  {
    id: 6,
    title: "사빠딸",
    content:
      "사랑에 빠진 딸기에 진짜 뼈 버섯도 만들어주세요! 다시 맛있는 딸기쥬는.. 빼고 먹어요ㅠ",
    author: "lmg***님",
  },
  {
    id: 7,
    title: "찰떡이구마",
    content:
      "찰떡이구마 재출시 해주세요ㅠㅠㅠㅠㅠ 고구마 엄청 좋아하는데 못 먹어봐서 아쉬워요ㅠㅠ",
    author: "rks***님",
  },
  {
    id: 8,
    title: "아빠의 싱싱농장",
    content:
      "아빠의 싱싱농장이 너무 그립습니다. 네이버에 아빠의 싱싱농장 검색해도 그리워하는 분들이 너무 많아요...",
    author: "dit***님",
  },
  {
    id: 9,
    title: "2010년쯤 나왔었던 하드락 아이스크림 맛이 먹고 싶어",
    content:
      "안녕하세요 2010년쯤 나왔었던 하드락 아이스크림이 너무 맛있었고 재출시 또는 이벤트성 출시를 바라는 마음에 글올 작성합니다.",
    author: "hot***님",
  },
  {
    id: 10,
    title: "초당아이스",
    content: "2022년 9월 이달의 맛이었던 초당옥수수를 재출시해주세요!",
    author: "wns***님",
  },
];

const Card = ({ bgColor, titleSmall, titleMain, button1, button2 }) => (
  <div className={styles.cardFlexItem} style={{ backgroundColor: bgColor }}>
    <div>{titleSmall}</div>
    <h2 className={styles.cardTitleMain}>{titleMain}</h2>
    <button className={styles.primaryButton}>{button1}</button>
    {button2 && <button className={styles.secondaryButton}>{button2}</button>}
  </div>
);

export default function PlazaPage() {
  return (
    <div className={styles.container}>
      {/* 제목 */}
      <h1 className={styles.titleMain}>배라광장</h1>
      <p className={styles.titleSub}>
        배라에게 묻고 배라가 답해드려요,
        <br />
        배라에게 다양한 의견을 전달해주세요
      </p>

      {/* 상단 3개 박스 */}
      <div className={styles.topCards}>
        {topCards.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>

      {/* 카드 리스트 */}
      <div className={styles.cardGrid}>
        {cardsData.map(({ id, title, content, author }) => (
          <div key={id} className={styles.card}>
            <div className={styles.cardNewBadge}>NEW</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardContent} title={content}>
              {content}
            </p>
            <p className={styles.cardAuthor}>{author}</p>
            <button className={styles.cardButton}>자세히 보기</button>
          </div>
        ))}
      </div>
    </div>
  );
}
