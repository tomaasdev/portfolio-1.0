import "../styles/Home.css";
import { useLang } from "../src/context/useLang";

function Home() {
  const { t } = useLang();

  return (
    <div className="cont-body">
      <div className="desc-cont-1">
        <div className="tr">{t.home.nombre}</div>
        <div className="desc">
          <div className="title-desc">{t.home.tituloHome}</div>
          {t.home.desc1}
          <br />
          {t.home.desc2}
          <br />
          {t.home.desc3}
        </div>
        <br />
        <br />
        <div className="double-desc">
          <div>
            {t.home.double1_linea1}
            <br />
            {t.home.double1_linea2}
            <br />
            {t.home.double1_linea3}
            <br />
            {t.home.double1_linea4}
          </div>
          <div>
            {t.home.double2_linea1}
            <br />
            {t.home.double2_linea2}
            <br />
            {t.home.double2_linea3}
            <br />
            {t.home.double2_linea4}
          </div>
        </div>
      </div>
      <div className="desc-cont-2">
        <img src="../public/images/foto cv.jpeg" className="img-cv" />
      </div>
    </div>
  );
}

export default Home;