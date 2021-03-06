const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Bring in the routes
const userRouter = require('./routes/user')
const chatroomRouter = require('./routes/chatroom')
console.log(chatroomRouter)
app.use("/user", userRouter);
app.use("/chatroom", chatroomRouter);

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;