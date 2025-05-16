import Link from "next/link";
import "@/styles/story/brandstory/brandstory.css";

export default function BrandHistoryPage() {
  return (
    <main className="bebetter-wrapper">
      <div className="breadcrumb">
        <span href="/story/history" className="breadcrumbbar active">
          브랜드 스토리
        </span>
        <Link href="/story/history" className="breadcrumbbar">
          이달의 맛 히스토리
        </Link>
        <span className="breadcrumbbar">Be Better</span>
      </div>

      <h1 className="bebetter-title">Brand Story</h1>
    </main>
  );
}
