const express = require("express");

// const fs = require("fs");
// const cheerio = require("cheerio");

// const response =await fetch("http://webadress.com");
const app = express();

const fakeArr = [];

app.use(express.json());

app.get("/books", (request, response) => {
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/books", (request, response) => {
  //get the irst book
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("./books", (request, response) => {
  fakeArr.push(request.body);
  // console.log(fakeArr);

  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

//HTTP Verbs -GET, POST, PUT, DELETE

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

// app.use("/example", express.static("example"));
// app.use("/safisbooks", express.static("safisbooks"));

// // Read HTML content
// const htmlContent = fs.readFileSync(
//   "esoteric.html",
//   "index.html",
//   "archive.html",
//   "utf8"
// );
// // Load HTML content in cheerio
// const $ = cheerio.load(htmlContent);

// const images = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   archive,
//   emerald,
//   es1,
//   es2,
//   es3,
//   es4,
//   es5,
//   es6,
//   es7,
//   es8,
// ];

// $("img").each((index, element) => {
//   const imageUrl = $(element).attr("src");
//   images.push(imageUrl);
// });

//this asks the server to respond to the request to find images
//   res.json(images);
// });

//app.use is an object method/example is the argument passed
//example is the filename where html data files live
//this will call the index data within the "example file"

// app.get("/health", (req, res) => {
//   res.send("healthy");
// });

//the health route makes a get request to check health of the server

// console.log("recieved request to locate images");

//creating the get request to check server is listening
