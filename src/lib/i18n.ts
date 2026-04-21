export const languages = [
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const DEFAULT_LANGUAGE: Language = "pt";

export function isLanguage(value: string | null | undefined): value is Language {
  return languages.some((language) => language.code === value);
}

export function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const locale = navigator.language.slice(0, 2).toLowerCase();

  return isLanguage(locale) ? locale : DEFAULT_LANGUAGE;
}
