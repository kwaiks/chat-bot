const Chat = require('../models/Chat');

const fQController = async (_req, res) => {
    try {
        const result = await Chat.aggregate([
            {
                "$match": {
                    intent: {
                        "$ne": "None"
                    }
                }
            },
            {
                "$group":{
                    _id: "$message",
                    total: {
                        $sum: 1
                    }
                }
            },
            {
                "$sort": {
                    "total": -1
                }
            },
            {
                "$project": {  
                    "_id": 0,
                    "message": "$_id",
                    "total":1
                }
            },
        ]).limit(5).exec();
        return res.status(200).send(result);
    }catch(err){
        console.log(err);
        return res.status(500).send("Error");
    }
}

const uQController = async (_req,res) => {
    try {
        const result = await Chat.aggregate([
            {
                "$match": {
                    intent: "None"
                }
            },
            {
                "$group":{
                    _id: "$message",
                    total: {
                        $sum: 1
                    }
                }
            },
            {
                "$sort": {
                    "total": -1
                }
            },
            {
                "$project": {  
                    "_id": 0,
                    "message": "$_id",
                    "total":1
                }
            }
        ]).limit(5).exec();
        return res.status(200).send(result);
    }catch(err){
        console.log(err);
        return res.status(500).send("Error");
    }
}

module.exports = {
    fQController,
    uQController
}