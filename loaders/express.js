const bodyParser = require('body-parser');
const cors = require("cors");
const router = require('../api');

const expressLoader = ({app}) => {
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(router);
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    app.use((err, _req, res, _next) => {
        res.status(err.status || 500);
        res.json({
            errors:{
                message: err.message
            }
        });
    });
}
module.exports = expressLoader;