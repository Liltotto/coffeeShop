const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@assets': resolvePath('./src/assets'),
            '@scss': resolvePath('./src/scss'),
            '@context': resolvePath('./src/context'),
            '@services': resolvePath('./src/services'),
        }
    },
}