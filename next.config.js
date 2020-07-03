const withFonts = require('next-fonts'); // eslint-disable-line @typescript-eslint/no-var-requires
const withImages = require('next-images'); // eslint-disable-line @typescript-eslint/no-var-requires
require('dotenv').config();

/* Config
---------------------------------------------------- */
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
            isProduction: process.env.NODE_ENV === 'production'
        },

        target: 'server'
    })
);
