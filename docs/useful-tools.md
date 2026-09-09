# Useful Tools

A collection of online tools for checking page speed, SEO setup, meta tags, structured data, and more. Useful when working on this site's metadata (`src/layouts` / `src/pages`) or after deploying to Cloudflare Pages.

## Speed & Core Web Vitals

- [PageSpeed Insights](https://pagespeed.web.dev/) - Google's lab + field (CrUX) audit of performance, accessibility, and SEO, with Core Web Vitals
- [WebPageTest](https://www.webpagetest.org/) - Deep performance testing from multiple locations, devices, and connection speeds (filmstrip view, waterfalls)
- [GTmetrix](https://gtmetrix.com/) - Lighthouse-based reports with easy-to-read recommendations and monitoring
- [DebugBear](https://www.debugbear.com/) - Continuous Core Web Vitals monitoring with detailed Lighthouse breakdowns
- Chrome DevTools **Lighthouse** - Built into the browser (`F12` → Lighthouse tab), no signup needed

## SEO & Search

- [Google Search Console](https://search.google.com/search-console) - Indexing status, sitemap submission, URL inspection, search performance
- [Bing Webmaster Tools](https://www.bing.com/webmasters) - The Bing equivalent, also imports sites already verified in Search Console

## Meta Tags & Social Previews

- [metatags.io](https://metatags.io/) - Instant preview of title/description and Google + social card appearance
- [OpenGraph.xyz](https://www.opengraph.xyz/) - Previews Open Graph / Twitter card rendering for all major platforms
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Shows how Facebook/WhatsApp scrape the page and clears the share cache
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) - Shows the preview LinkedIn generates when a URL is shared

## Structured Data

- [Google Rich Results Test](https://search.google.com/test/rich-results) - Checks JSON-LD/microdata against Google's rich-result eligibility
- [Schema.org Validator](https://validator.schema.org/) - Generic schema.org syntax validation, independent of Google's rules

## Validators & Infrastructure

- [W3C HTML Validator](https://validator.w3.org/) - Markup correctness (bad HTML can silently break meta tags and JSON-LD)
- [SSL Labs](https://www.ssllabs.com/ssltest/) - TLS/SSL certificate and configuration grading
- [Security Headers](https://securityheaders.com/) - Checks HTTP security headers (CSP, HSTS, etc.) - relevant for the nginx config in this repo
- [HTTP Status Checker](https://httpstatus.io/) - Bulk checks of status codes and redirect chains

## Accessibility

- [WAVE](https://wave.webaim.org/) - Visual accessibility evaluation of a page (contrast, landmarks, ARIA issues)
