const webpack = require('webpack');
const chalk = require('chalk');
const config = require('../configs/webpack.prod.config.js');

webpack(config).run((err, stats) => {
    if (err) {
        console.error('Failed to create a production build. Reason:');
        console.error(err.message || err);
        process.exit(1);
    }

    const jsonStats = stats.toJson();

    if (jsonStats.errors.length) {
        console.error(chalk.red('Failed to create a production build. Reason:'));

        jsonStats.errors.forEach((error) => {
            console.error(error);
        });

        process.exit(1);
    }

    if (jsonStats.warnings.length) {
        console.error(chalk.yellow('Failed to create a production build. Reason:'));

        jsonStats.warnings.forEach((warning) => {
            console.error(warning);
        });
    }

    if (!err && !jsonStats.errors.length) {
        console.log();
        console.log(chalk.green('Compiled successfully.'));
    }
});