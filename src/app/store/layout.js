import PageMenu from "@/components/store/PageMenu";

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <PageMenu />
        {children}
      </div>
    </>
  );
}
