import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
import { defaultLocale } from "./constants/locales";
import { i18n } from "./i18n-config";

import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameImageOrVideoFormat = pathname.match(
    /(.*)\.(png|jpg|jpeg|webp|svg|gif|mp4)$/,
  );
  // dont redirect if it's an image
  if (pathnameImageOrVideoFormat) return;

  if (
    pathname.startsWith(`/${defaultLocale}/`) ||
    pathname === `/${defaultLocale}`
  ) {
    const newUrl = new URL(
      pathname.replace(
        `/${defaultLocale}`,
        pathname === `/${defaultLocale}` ? "/" : "",
      ),
      request.url,
    );
    return NextResponse.redirect(newUrl);
  }

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // pathname has locale and is not the default locale, then return
  if (pathnameHasLocale) return;

  const locale = match(languages, i18n.locales, defaultLocale); // -> 'en-US'

  // Rewrite if there is no locale
  if (locale === defaultLocale) {
    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
    return NextResponse.rewrite(newUrl);
  }

  request.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
