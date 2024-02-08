require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");
const Book = require("./books/model");

const bookRouter = require("./books/routes");

const app = express();

app.use(express.json());

// process.env.MONGO_URI

connection();

app.use(bookRouter);

const logTypeOfResult = async (result) => {
  console.log("Typeof result: ${typeof result} - result: ${result}");
};

app.get("/books/first", (request, response) => {
  Book.find()
    .select("-__v")
    .then((firstBook) => {
      response.json(firstBook);
    })
    .catch((error) => {
      console.error(error.message);
      response.status(501).send("First Book Not Found");
    });
});

//HTTP Verbs -GET, POST, PUT, DELETE

//install new packages mongoose /npm i mongoose dotenv/ befor starting code

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
