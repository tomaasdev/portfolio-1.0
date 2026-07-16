import "../styles/Formacion.css";
import { BsClaude } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { useLang } from "../src/context/useLang";

function Formacion() {

  const { t } = useLang();
  
  return (
    <div className="formacion-full">
      <div className="formacion-cont">
        <div className="title-formacion">{t.formacion.tituloConocimientos}</div>
        <div className="tecnologias">
          <div className="subtitle"> Frontend </div>
          <div className="flex">
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <IoLogoJavascript size={"40px"} />{" "}
              </div>
              <div className="text-icono">JavaScript</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaReact size={"40px"} />{" "}
              </div>
              <div className="text-icono">React</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaHtml5 size={"40px"} />{" "}
              </div>
              <div className="text-icono">Html5</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <IoLogoCss3 size={"40px"} />{" "}
              </div>
              <div className="text-icono">Css3</div>
            </div>
          </div>
          <div className="subtitle">backend</div>
          <div className="flex">
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaNodeJs size={"40px"} />{" "}
              </div>
              <div className="text-icono">NodeJs</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <GrMysql size={"40px"} />{" "}
              </div>
              <div className="text-icono">MySQL</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                <SiExpress size={"40px"} />
              </div>
              <div className="text-icono"> Express</div>
            </div>
          </div>
          <div className="subtitle"> {t.formacion.herramientas}</div>
          <div className="flex">
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaGitAlt size={"40px"} />{" "}
              </div>
              <div className="text-icono">Git</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaGithub size={"40px"} />{" "}
              </div>
              <div className="text-icono">GitHub</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <BsClaude size={"40px"} />{" "}
              </div>
              <div className="text-icono">Claude</div>
            </div>
            <div className="tarjeta-tecn">
              <div className="icono">
                {" "}
                <FaFigma size={"40px"} />{" "}
              </div>
              <div className="text-icono">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formacion;
