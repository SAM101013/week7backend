const Router = require("express");
const bookRouter = Router("");

const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  console.log("book:", book);

  response.send({ message: "success book created", book: book });
});

bookRouter.post("/books/mewgenre", async (request, response) => {
  const book = await Book.create({
    genre: request.body.genre,
  });

  console.log("book:", book);

  response.send({ message: "success book created", book: book });
});

module.exports = bookRouter;
