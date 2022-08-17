import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { Locales } from "../types";
import Cookies from "js-cookie";
import { serverEndPoint } from "../utils/server";
import fetcher from "../utils/fetch";
import useSWRImmutable from "swr/immutable";

const defaultLocale = {
  id: "en-us",
  name: "English - United States",
};

const setLocaleCookie = (locale: string) =>
  Cookies.set("locale", locale, { expires: 1 });

const getLocaleCookie = () => Cookies.get("locale");
const localeEndPoint = `${serverEndPoint}/api/locale`;

const Locales = () => {
  const [selected, onSelect] = React.useState<string>(defaultLocale.id);
  const { data } = useSWRImmutable<Locales>(localeEndPoint, fetcher);

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
    /**
     * And yeah, look for previously selected locale!
     */
    lookupForLocaleCookie();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const changedLocale = event.target.value;
    onSelect(changedLocale);
    setLocaleCookie(changedLocale);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="locale">Locale</InputLabel>
      <Select
        value={selected}
        onChange={handleChange}
        labelId="locale"
        label="Locale"
      >
        {data?.map((locale) => (
          <MenuItem value={locale.id} key={locale.id}>
            {locale.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Locales;
