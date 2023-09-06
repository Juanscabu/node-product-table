const { createFile } = require('./Helpers/product');
const argv = require('./config/yargs')

createFile(argv)
    .then(fileName => console.log(fileName, 'Created'))
    .catch(err => console.log(err))
