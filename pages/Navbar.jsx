import "../styles/Navbar.css";
import { useLang } from '../src/context/useLang';
import LanguageSwitcher from '../src/components/languageSwitcher/LanguageSwitcher';

function Navbar({ goTo, isMobile }) {
  const { t } = useLang();

  return (
    <nav className="btns-nav">
      {!isMobile && (
        <>
          <button className="navegante" onClick={() => goTo(0)}>
            {t.navbar.inicio}
          </button>
          <button className="navegante" onClick={() => goTo(1)}>
            {t.navbar.proyectos}
          </button>
          <button className="navegante" onClick={() => goTo(2)}>
            {t.navbar.contacto}
          </button>
        </>
      )}
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;