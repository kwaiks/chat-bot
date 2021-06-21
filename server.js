const express = require("express");
const loaders = require('./loaders');

(async() => {
    const app = express();
    const port = process.env.PORT || 8888;

    await loaders({app});

    app.listen(port, (err)=>{
        if (err) process.exit(1);
        console.log(`Server started at ${port}`)
    })
})();