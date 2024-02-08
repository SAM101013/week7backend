const Book = require("./model");
const Router = require("express");
const bookRouter = Router();

const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", async (request, response) => {
  const { title, author, genre } = request.body;

  Book.create({ title, author, genre })
    .then((book) => {
      console.log("book:", book);
      response.send({ message: "Success, book created", book });
    })
    .catch((error) => {
      console.error("Error creating book:", error);
      response.status(500).send({ message: "Server error" });
    });
});

bookRouter.post("/books/addGenre", async (request, response) => {
  const { genre } = request.body;

  Book.create({ genre })
    .then((book) => {
      console.log("book:", book);
      response.send({ message: "Success, book created with genre", book });
    })
    .catch((error) => {
      console.error("Error creating book with genre:", error);
      response.status(500).send({ message: "Server error" });
    });
});

bookRouter.get("/books/getAllBooks", (request, response) => {
  Book.find()
    .select("-__v")
    .then((allBooks) => {
      response.json(allBooks);
    })
    .catch((error) => {
      console.error("Error getting all books:", error);
      response.status(500).send({ message: "Server error" });
    });
});

bookRouter.delete("/books/delete/:title", async (request, response) => {
  const { title } = request.params;

  Book.findOneAndDelete({ title })
    .select("-__v")
    .then((deletedBook) => {
      if (!deletedBook) {
        return response.status(404).send("Book not found");
      }
      response.json(deletedBook);
    })
    .catch((error) => {
      console.error("Error deleting book:", error);
      response.status(500).send({ message: "Server error" });
    });
});

bookRouter.put("/books/update/:id", async (request, response) => {
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
      console.error("Error updating book:", error);
      response.status(500).send({ message: "Server error" });
    });
});

module.exports = bookRouter;
