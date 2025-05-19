import PageHeader from "@/components/store/PageHeader";
import FlavorContent from "@/components/store/flavor/FlavorContent";
import FlavorStore from "@/components/store/flavor/FlavorStore";
export default function Flavor() {
  return (
    <section style={{ paddingBottom: "100px" }}>
      <PageHeader title="100 Flavor">
        <div className="page-header__content">
          <p className="page-header__text">배스킨라빈스 100flavor</p>
        </div>
      </PageHeader>
      <div className="store-flavor">
        <div className="store-flavor__container">
          <div className="store-flavor__content">
            <FlavorContent />
            <FlavorStore />
          </div>
        </div>
      </div>
    </section>
  );
}
