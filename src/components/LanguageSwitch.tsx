import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/LanguageSwitch.css";

const flags = {
  en: "/flags/uk.png",
  fr: "/flags/fr.png",
};

function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedLang: "fr" | "en") => {
    if (selectedLang !== lang) toggleLanguage();
    setOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button onClick={() => setOpen(!open)}>
        <img src={flags[lang]} alt={lang} />
      </button>

      {open && (
        <div className="dropdown-menu">
          {["fr", "en"]
            .filter((l) => l !== lang)
            .map((l) => (
              <div key={l} onClick={() => handleSelect(l as "fr" | "en")}>
                <img src={flags[l]} alt={l} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;
