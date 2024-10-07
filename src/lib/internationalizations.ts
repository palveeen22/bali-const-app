import type { TDictionary, Lang } from "../types";
import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";

export const LANGS = ["en", "ru"] as const; //added languages here
export const DEFAULT_LANG: Lang = "en";
export const DICTIONARIES = { en,ru};
export const DEFAULT_DICTIONARY = DICTIONARIES[DEFAULT_LANG];

export const LANGUAGES: Record<Lang, { label: string; value: Lang; dictionary: TDictionary }> = {
  en: {
    label: "English",
    value: "en",
    dictionary: DICTIONARIES.en,
  },
  ru: {
    label: "Русский",
    value: "ru",
    dictionary: DICTIONARIES.ru,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LANGUAGE_OPTIONS = Object.values(LANGUAGES).map(({ dictionary, ...rest }) => rest);

// export const getDictionary = (lang: Lang): TDictionary => LANGUAGES[lang].dictionary;

export const getDictionary = (lang: Lang) => {
  const { dictionary: t, ...rest } = LANGUAGES[lang];
  return { t, ...rest };
};
