const nlp = require('./nlp');
const expressLoader = require('./express');
const db = require('./mongo');

const loader = async ({app}) => {
    await nlp.load();
    await expressLoader({app});
    db.on('connected', () => {
        console.log("db Connected")
    });
}

module.exports = loader;