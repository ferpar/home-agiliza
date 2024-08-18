import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "../i18n-config";
import { defaultLocale } from "../constants/locales";

export function getLocale(headers) {
  let languages = new Negotiator({ headers }).languages();
  const locale = match(languages, i18n.locales, defaultLocale); // -> 'en-US'
  return locale
}

// old basis for internationalization - outdated
import stringsES from "../es.json";

const strings = {
  es: stringsES,
};

export function getString(id, lang = "es") {
  return strings[lang][id];
}
