import { TDictionary } from "../types";

export const NAVBAR_LIST: { key: keyof TDictionary["navbar"]; href: string }[] = [
    { key: "about", href: "" },
    { key: "service", href: "about" },
    { key: "blog", href: "portfolio" },
    { key: "resource", href: "contact" },
    { key: "contact", href: "contact" },
    { key: "talk", href: "contact" },
  ];