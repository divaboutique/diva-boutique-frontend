import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LangContext);

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      style={{
        border: "1px solid #000",
        padding: "8px 16px",
        cursor: "pointer",
        position: "fixed",
        top: "20px",
        right: "20px"
      }}
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
