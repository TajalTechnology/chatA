const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const {createChatroom} = require("../controllers/chatroomController");

const auth = require("../middlewares/auth");

router.post("/cht",auth, createChatroom);

module.exports = router;