import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { zhTW } from "./locales/zh-TW";

const resources = {
  en,
  "zh-TW": zhTW,
};

const i18nConfig = {
  resources,
  lng: "zh-TW",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
};

const i18nInstance = i18n.createInstance();
i18nInstance.use(initReactI18next).init(i18nConfig);

export default i18nInstance;
