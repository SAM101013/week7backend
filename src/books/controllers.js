const Book = require("./model");

const addBook = async (request, response) => {
  try {
    //add a single book to the database
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

//creating and targeting objects

//const UserObj = {
// name: "Safi",
// age: "42",
//isAmzing: true
//favFruit:{
//banana: true,
//apple: true,
// orange: false
//}
//};

// console.log(UserObj)
//console.log(name,age,isAmazing)
