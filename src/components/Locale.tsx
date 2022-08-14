import { Select } from "@chakra-ui/react";
import * as React from "react";
import { Locales } from "../types";
import Cookies from "js-cookie";

const defaultLocale = {
  id: "en-us",
  name: "English - United States",
};

const setLocaleCookie = (locale: string) => Cookies.set("locale", locale);

const getLocaleCookie = () => Cookies.get("locale");

const Locales = () => {
  const [locales, setLocales] = React.useState<Locales>([]);
  const [selected, onSelect] = React.useState<string>(defaultLocale.id);

  const fetchLocales = async () => {
    const locales: Locales = await fetch(
      "http://localhost:3000/api/locale"
    ).then((response) => response.json());

    if (locales && locales.length) {
      setLocales(locales);
    } else {
      setLocales([defaultLocale]);
    }
  };

  const lookupForLocaleCookie = () => {
    const existingLocale = getLocaleCookie();

    if (existingLocale) {
      onSelect(existingLocale);

      return;
    }

    setLocaleCookie(defaultLocale.id);
    onSelect(defaultLocale.id);
  };

  React.useEffect(() => {
    fetchLocales();
    lookupForLocaleCookie();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const changedLocale = event.target.value;
    onSelect(changedLocale);
    setLocaleCookie(changedLocale);
  };

  return (
    <Select value={selected} onChange={handleChange} borderColor="teal">
      {locales.map((locale) => (
        <option value={locale.id} key={locale.id}>
          {locale.name}
        </option>
      ))}
    </Select>
  );
};

export default Locales;
