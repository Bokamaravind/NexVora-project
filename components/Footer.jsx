import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <Logo />
          <nav className="foot-links" aria-label="Footer">
            <a href="/#services">Services</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#process">How we work</a>
            <a href="/#book">Book a service</a>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>Building Intelligent Solutions</span>
          <div className="foot-bottom-links">
            <a href="mailto:companynexvora@gmail.com">companynexvora@gmail.com</a>
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <span>&copy; {new Date().getFullYear()} NexVora. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
