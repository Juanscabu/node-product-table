const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'The base of the product table'
    })
    .option(
        'l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        describe: 'Shows the product table in the console'
    })
    .option(
        'm', {
        alias: 'max',
        type: 'number',
        demandOption: false,
        describe: 'Set the max product for the table',
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'the base have to be a number'
        }
        return true;
    })
    .argv;

module.exports = argv;