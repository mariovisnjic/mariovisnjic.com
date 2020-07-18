const withFonts = require('next-fonts'); // eslint-disable-line @typescript-eslint/no-var-requires
const withImages = require('next-images'); // eslint-disable-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = withFonts(
    withImages({
        webpack(config, { buildId, dev, isServer, defaultLoaders }) {
            config.node = {
                fs: 'empty'
            };
            return config;
        },

        publicRuntimeConfig: {
            staticFolder: '/public',
            APP_URL: process.env.APP_URL,
            MONGO_USER: process.env.MONGO_USER,
            MONGO_PASSWORD: process.env.MONGO_PASSWORD,
            MONGO_DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
            GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
            isProduction: process.env.NODE_ENV === 'production'
        },

        exportPathMap: () => {
            return {
                "/": { page: "/" },
                "/chrome-notes-extension": { page: "/chromeNotesExtension" },
            }
        },

        target: 'server'
    })
);
