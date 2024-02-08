const Book = require("./model");

const addBook = async (request, response) => {
  try {
    //add a single book to the db
    console.log("request.body:", request.body);
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });
    console.log("book", book);
    response.send({ messgae: "success book created", book: book });
  } catch (error) {
    res.send({ messgae: "server error", error: error });
  }
};

module.exports = {
  addBook: addBook,
};
