import PageMenu from "@/components/store/PageMenu";
import SiteContainer from "@/components/store/SiteContainer";

export default function RootLayout({ children }) {
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

  return (
    <>
      <SiteContainer>
        <PageMenu items={items} />
        {children}
      </SiteContainer>
    </>
  );
}
