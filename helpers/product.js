const fs = require('fs');
const colors = require('colors');

const createFile = async (yargs) => {

    try {
        let output = '';
        let base = yargs.base;
        for (let index = 1; index <= yargs.max; index++) {
            //With colors that breaks the .txt file
            //output += `${base.toString().red} x ${index.toString().red} = ${base * index}\n`;
            output += `${base} x ${index} = ${base * index}\n`;
        }
        fileName = `table-${base}.txt`;

        if (yargs.list) {
            console.log(output);
        }

        fs.writeFileSync(`./output/${fileName}`, output);

        return fileName;
    } catch (error) {
        throw err;
    }



}

module.exports = {
    createFile
}