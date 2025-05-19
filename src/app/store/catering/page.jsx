import CateringContent from "@/components/store/catering/CateringContent";
import PageHeader from "@/components/store/PageHeader";

export default function Catering() {
  return (
    <section style={{ paddingBottom: "150px" }}>
      <PageHeader title="단체주문">
        <div className="page-header__content">
          <p className="page-header__text">
            단체주문도 언제나, 어디서나 배스킨라빈스!
          </p>
        </div>
      </PageHeader>
      <CateringContent></CateringContent>
    </section>
  );
}
