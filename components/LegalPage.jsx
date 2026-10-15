import Header from './Header';
import Footer from './Footer';

export default function LegalPage({ title, intro, children }) {
  return (
    <>
      <Header />
      <main>
        <section className="sec legal-page">
          <div className="wrap">
            <header className="legal-heading">
              <span className="eyebrow">NexVora · Legal</span>
              <h1>{title}</h1>
              <p className="legal-updated">Last updated: October 15, 2026</p>
              <p className="legal-intro">{intro}</p>
            </header>
            <article className="legal-content">{children}</article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
