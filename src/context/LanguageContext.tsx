import { createContext, useContext, useState, type ReactNode } from "react";
import { translations } from "../i18n/translations";
import type { Language } from "../i18n/translations";

type LanguageContextType = {
  lang: Language;
  t: (typeof translations)[Language];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  t: translations.fr,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: translations[lang],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
