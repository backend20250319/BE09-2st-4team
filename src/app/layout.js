
import "../styles/mainpage/main.css";
import "@/styles/header.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "배스킨라빈스",
  description: "프리미엄 아이스크림 브랜드",

};

export default function RootLayout({ children }) {
  return (

    <html lang="ko">
      <head>
        <meta name="viewport" content="width=1280, user-scalable=no" />
      </head>

      <body>
        <Header />
        <main
          style={{ paddingTop: "90px", minHeight: "60vh", background: "#fff" }}
        >
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
