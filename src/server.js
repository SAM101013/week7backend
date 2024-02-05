const express = require("express");

const app = express();

app.use("/example", express.static("example"));
app.use("/safisbooks", express.static("safisbooks"));

//app.use is an object method/example is the argument passed
//example is the filename where html data files live
//this will call the index data within the "example file"

// app.get("/health", (req, res) => {
//   res.send("healthy");
// });

//the health route makes a get request to check health of the server

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

//creating the get request to check server is listening
