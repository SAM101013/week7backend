const express = require("express");

// const fs = require("fs");
// const cheerio = require("cheerio");

// const response =await fetch("http://webadress.com");
const app = express();

const fakeArr = [
  {
    title: "The Secret Garden",
    genre: "Mystery",
    author: "Victoria Green",
  },
  {
    title: "Midnight Shadows",
    genre: "Thriller",
    author: "Elena Blackwood",
  },
  {
    title: "Echoes of Eternity",
    genre: "Fantasy",
    author: "Lucas Stone",
  },
  {
    title: "Whispers in the Wind",
    genre: "Romance",
    author: "Amber Dawn",
  },
  {
    title: "Beyond the Stars",
    genre: "Science Fiction",
    author: "Jason Stardust",
  },
  {
    title: "Lost in Time",
    genre: "Adventure",
    author: "Olivia Rivers",
  },
  {
    title: "Crimson Skies",
    genre: "Horror",
    author: "Derek Nightshade",
  },
  {
    title: "Sapphire Seas",
    genre: "Historical Fiction",
    author: "Isabella Blue",
  },
  {
    title: "The Enchanted Forest",
    genre: "Children's",
    author: "Ella Evergreen",
  },
  {
    title: "The Emerald Isle",
    genre: "Historical Romance",
    author: "Patrick O'Kelly",
  },
  {
    title: "Golden Dreams",
    genre: "Biography",
    author: "Aurora Gold",
  },
  {
    title: "Silver Shadows",
    genre: "Paranormal",
    author: "Luna Nightfall",
  },
  {
    title: "Redemption Road",
    genre: "Western",
    author: "Clayton West",
  },
  {
    title: "Mystic Moonlight",
    genre: "Supernatural",
    author: "Selena Moonbeam",
  },
  {
    title: "Frozen Dreams",
    genre: "Dystopian",
    author: "Ivy Frost",
  },
  {
    title: "Eternal Flames",
    genre: "Urban Fantasy",
    author: "Phoenix Blaze",
  },
  {
    title: "Dark Desires",
    genre: "Gothic",
    author: "Raven Nightshade",
  },
  {
    title: "Crystal Clear",
    genre: "Young Adult",
    author: "Crystal Waters",
  },
  {
    title: "Neon Nights",
    genre: "Cyberpunk",
    author: "Zoe Neon",
  },
  {
    title: "Whirlwind Whispers",
    genre: "Contemporary",
    author: "Willow Breeze",
  },
];
app.use(express.json());

app.get("/books/", (request, response) => {
  response.send({ message: "success", fakeArr: fakeArr });
});

app.get("/books/book", (request, response) => {
  //get the first book
  const book = fakeArr[0];
  response.send({ message: "success", book: book });
});

app.post("/books", (request, response) => {
  fakeArr.push(request.body);
  console.log(request.body);

  response.send({ message: "success", newBook: fakeArr[fakeArr.length - 1] });
});

//HTTP Verbs -GET, POST, PUT, DELETE

app.delete("/books/:title", (request, response) => {
  const title = request.params.title;
  const index = fakeArr.findIndex((book) => book.title === title);

  if (index !== -1) {
    const deletedBook = fakeArr.splice(index, 1);
    response.send({ message: "success", deletedBook: deletedBook });
  } else {
    response.status(404).send({ message: "Book not found" });
  }
});

app.put("/books/:title", (request, response) => {
  const title = request.params.title;
  // Find index of the book by title
  const index = fakeArr.findIndex((book) => book.title === title);

  if (index !== -1) {
    fakeArr[index] = request.body;
    response.send({ message: "success", updatedBook: fakeArr[index] });
  } else {
    response.status(404).send({ message: "Book not found" });
  }
});

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
