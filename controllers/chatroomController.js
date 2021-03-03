const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");

module.exports = {
  createChatroom: async (req, res) => {

    const { name } = req.body;

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";

    const chatroomExists = await Chatroom.findOne({ name });

    if (chatroomExists) throw "Chatroom with that name already exists!";

    const chatroom = new Chatroom({
      name,
    });
    console.log("Hello from controller")
    const m= await chatroom.save()
    console.log(m)

    res.json({
      message: "Chatroom created!",
    });
  }
}

// exports.createChatroom = async (req, res) => {
//     console.log('Hello from controller')

// };