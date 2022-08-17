import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as React from "react";
import { Locales } from "../types";
import { serverEndPoint } from "../utils/server";
import fetcher from "../utils/fetch";
import useSWRImmutable from "swr/immutable";
import { getCurrentLocale, setCurrentLocale } from "../utils/currentLocale";

const DEFAULT_LOCALE = {
  id: "en-us",
  name: "English - United States",
};

const localeEndPoint = `${serverEndPoint}/api/locale`;

const Locales = () => {
  const [selected, onSelect] = React.useState<string>(DEFAULT_LOCALE.id);
  const { data } = useSWRImmutable<Locales>(localeEndPoint, fetcher);

  const lookupForLocaleCookie = () => {
    const existingLocale = getCurrentLocale();

    if (existingLocale) {
      onSelect(existingLocale);

      return;
    }

    setCurrentLocale(DEFAULT_LOCALE.id);
  };

  React.useEffect(() => {
    /**
     * And yeah, look for previously selected locale!
     */
    lookupForLocaleCookie();
  }, []);

  const handleChange = ({
    target: { value: changedLocale },
  }: SelectChangeEvent) => {
    onSelect(changedLocale);
    setCurrentLocale(changedLocale);
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
