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

app.get("/books/getAllBooks", (request, response) => {
  Book.find()
    .select("-__v")
    .then((allBooks) => {
      response.json(allBooks);
    })
    .catch((error) => {
      console.error(error.message);
      response.status(500).send("Server Error");
    });
});

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

app.delete("/books/:id", async (request, response) => {
  const { id } = request.params;

  Book.findByIdAndDelete(id)
    .select("-__v")
    .then((deletedBook) => {
      if (!deletedBook) {
        return response.status(404).send("Book not found");
      }
      response.json(deletedBook);
    })
    .catch((error) => {
      console.error(error.message);
      response.status(500).send("Server Error");
    });
});

app.put("/books/update/:id", async (request, response) => {
  const { id } = request.params;
  const { title, author, genre } = request.body;

  Book.findByIdAndUpdate(id, { title, author, genre }, { new: true })
    .then((updatedBook) => {
      if (!updatedBook) {
        return response.status(404).send("Book not found");
      }
      response.json({
        message: "Book updated successfully",
        book: updatedBook,
      });
    })
    .catch((error) => {
      console.error(error.message);
      response.status(500).send("Server Error");
    });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
