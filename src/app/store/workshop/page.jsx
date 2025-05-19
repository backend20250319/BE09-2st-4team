import PageHeader from "@/components/store/PageHeader";
import WorkshopContent from "@/components/store/workshop/WorkshopContent";

export default function Workshop() {
  return (
    <section style={{ paddingBottom: "150px" }}>
      <PageHeader title="Workshop">
        <div className="page-header__content">
          <p className="page-header__text">
            달콤한 상상이 현실이 되는 실험과 창조의 공간
          </p>
        </div>
      </PageHeader>
      <WorkshopContent />
    </section>
  );
}
