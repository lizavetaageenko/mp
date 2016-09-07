const webpack = require('webpack');
const config = require('../configs/webpack.prod.config.js');

webpack(config).run((err) => {
    if (err) {
        console.error('Failed to create a production build. Reason:');
        console.error(err.message || err);
        process.exit(1);
    }
});