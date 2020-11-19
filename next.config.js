// next.config.js
module.exports = {
  i18n: {
    localeDetection: false,
    locales: ["en", "fr", "it"],
    defaultLocale: "en",
  },
  target: "serverless",
};
