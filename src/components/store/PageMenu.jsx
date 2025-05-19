"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/store/PageMenu.css";
const items = [
  {
    href: "/store/map",
    label: "매장 찾기",
  },
  {
    href: "/store/flavor",
    label: "100 flavor",
  },
  {
    href: "/store/workshop",
    label: "Workshop",
  },
  {
    href: "/store/delivery",
    label: "배달주문",
  },
  {
    href: "/store/catering",
    label: "단체주문",
  },
];
export default function PageMenu() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <nav className="page-menu">
      <ul className="page-menu__list">
        {items.map((item, index) => {
          // 현재 경로가 메뉴 항목의 href와 동일한지 확인
          const isActive = pathname === item.href;

          return (
            <li
              className={`page-menu__item ${
                isActive ? "page-menu__item--active" : ""
              }`}
              key={index}
            >
              <Link className="page-menu__link" href={item.href}>
                <div className="page-menu__box">
                  <span className="page-menu__name">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
