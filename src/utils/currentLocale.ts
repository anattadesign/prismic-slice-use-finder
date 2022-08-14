import Cookies from "js-cookie";

const FALLBACK_LOCALE = "en-us";

export const getCurrentLocale = () => {
  const selectedLocale = Cookies.get("locale");

  if (selectedLocale) return selectedLocale;

  return FALLBACK_LOCALE;
};
