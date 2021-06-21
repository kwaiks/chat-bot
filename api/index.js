const {Router} = require('express');
const askController = require('./ask');
const {fQController, uQController} = require('./questions');

const router = Router();

router.post('/ask', askController);
router.get('/frequent', fQController);
router.get('/unanswered', uQController);

module.exports = router;