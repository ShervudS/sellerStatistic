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
            5
        )
        .replace(/^(-?\d|--)/, '_$1');

module.exports = {
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
                    // moduleLoader.options.modules.localIdentName = "[hash:base64:6]";

                    // earlier below statements were sufficient:
                    // delete moduleLoader.options.modules.getLocalIdent;
                    // moduleLoader.options.modules.localIdentName = '[hash:base64:6]';
                });
            });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    env: {
        MAIN_WB_URL: process.env.MAIN_WB_URL,
        WB_TOKEN: process.env.WB_TOKEN,
    },

    ...nextTranslate(),
};
