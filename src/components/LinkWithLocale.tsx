import Link from "next/link";
import * as React from "react";
import { getCurrentLocale } from "../utils/currentLocale";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const LinkWithLocale = ({ href, children }: LinkProps) => {
  const [currentLocale, setCurrentLocale] = React.useState("");

  React.useEffect(() => {
    setCurrentLocale(getCurrentLocale());
  }, []);

  return <Link href={`${href}?lang=${currentLocale}`}> {children} </Link>;
};

export default LinkWithLocale;
