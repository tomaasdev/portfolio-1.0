// src/context/LanguageProvider.jsx
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../Translation";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
