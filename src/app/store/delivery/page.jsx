import DeliveryContent from "@/components/store/delivery/DeliveryContent";
import PageHeader from "@/components/store/PageHeader";

export default function Delivery() {
  return (
    <section>
      <PageHeader title="Delivery">
        <div className="page-header__content">
          <p className="page-header__text">
            <strong>모바일 사전주문 &amp; 배달 서비스</strong>내 손안의
            배스킨라빈스<i>!</i> <br />
            이제 모바일에서 빠르고 간편하게 주문해보세요<i>!</i>
          </p>
        </div>
      </PageHeader>
      <DeliveryContent></DeliveryContent>
    </section>
  );
}
