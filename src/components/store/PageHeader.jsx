import "@/styles/store/PageHeader.css";

export default function PageHeader({ title, children }) {
  return (
    <header className="page-header">
      <div>
        <header className="page-header">
          <div className="page-header__container">
            <div className="page-header__content">
              <h2 className="page-header__title">{title}</h2>
            </div>
            {children}
          </div>
        </header>
      </div>
    </header>
  );
}
