const {ask} = require('../loaders/nlp');
const Chat = require('../models/Chat');

const askController = async (req,res, _next) => {
    const {lang, question, sender} = req.body;
    try {
        const {intent, answer} = await ask(lang, question);
        const newChat = new Chat({
            message: question,
            intent: intent,
            sender,
            lang
        });
        await newChat.save();
        return res.send({intent, answer}).status(200);
    } catch (error) {
        console.log(error)
    }
    return res.status(500).send("Error")
}

module.exports = askController;