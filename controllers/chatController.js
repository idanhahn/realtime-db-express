var Chat = require('../models/ChatModel');

// GET ALL
exports.get_all = async (req, res) => {

    try{

        console.log('in get_all')
        const chats = await Chat.find({});
        res.status(200).json({
            message: 'Success',
            chats: chats
        })


    } catch (err) {
        res.status(500).json({
            message: err
        })
    }

}

// CREATE BY :ID
exports.create = async (req, res) => {

    console.log('in create')

    const new_chat = new Chat({
        recipientName : req.body.recipientName,
        recipientId: req.body.recipientId,
        sender: req.body.sender,
        senderId: req.body.senderId,
        msg: req.body.msg,
        time: req.body.time
    });

    try {

        const data = await new_chat.save();
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({
            message: err
        })
    }

}

