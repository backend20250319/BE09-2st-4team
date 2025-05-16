import PageMenu from "@/components/store/PageMenu";

export default function RootLayout({ children }) {
  return (
    <>
      <PageMenu />
      {children}
    </>
  );
}
