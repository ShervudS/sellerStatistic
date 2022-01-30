module.exports = {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    pages: {
        '/': ['home'],
    },
    loadLocaleFrom: (lang, ns) =>
        import(`./src/assets/locales/${lang}/${ns}.json`).then(
            (m) => m.default
        ),
};
