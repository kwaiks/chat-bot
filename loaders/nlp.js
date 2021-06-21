const { dockStart } = require('@nlpjs/basic');

let nlp;

const load = async () => {
  const dock = await dockStart({ use: ['Basic']});
  nlp = dock.get('nlp');
  await nlp.addCorpus('./corpus/corpus-en.json');
  await nlp.addCorpus('./corpus/corpus-id.json');
  await nlp.train();
}

const ask = async (lang, question) => {
  const response = await nlp.process(lang, question);
  return response;
}

module.exports = {
  load,
  ask
}