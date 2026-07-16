// src/components/LanguageSwitcher/LanguageSwitcher.jsx
import { useLang } from "../../context/useLang";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${lang === "es" ? styles.active : ""}`}
        onClick={() => setLang("es")}
      >
        ES
      </button>
      <button
        className={`${styles.btn} ${lang === "it" ? styles.active : ""}`}
        onClick={() => setLang("it")}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
