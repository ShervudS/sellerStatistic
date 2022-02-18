const path = require('path');
const loaderUtils = require('loader-utils');
const nextTranslate = require('next-translate');

const hashOnlyIdent = (context, _, exportName) =>
    loaderUtils
        .getHashDigest(
            Buffer.from(
                `filePath:${path
                    .relative(context.rootContext, context.resourcePath)
                    .replace(/\\+/g, '/')}#className:${exportName}`
            ),
            'md4',
            'base64',
            6
        )
        // replace invalid symbols with underscores instead of escaping
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        // cannot start with a digit, two hyphens, or a hyphen followed by a digit
        .replace(/^(\d|--|-\d)/, '__$1');

module.exports = nextTranslate({
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
        };
    },

    webpack(config, { dev }) {
        const rules = config.module.rules
            .find((rule) => typeof rule.oneOf === 'object')
            .oneOf.filter((rule) => Array.isArray(rule.use));

        if (!dev)
            rules.forEach((rule) => {
                rule.use.forEach((moduleLoader) => {
                    if (
                        moduleLoader.loader?.includes('css-loader') &&
                        !moduleLoader.loader?.includes('postcss-loader')
                    )
                        moduleLoader.options.modules.getLocalIdent =
                            hashOnlyIdent;
                });
            });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
        localeDetection: false,
    },

    env: {
        MAIN_WB_URL: process.env.MAIN_WB_URL,
        WB_TOKEN: process.env.WB_TOKEN,
    },
});
