
const fs = require("fs");


fs.writeFile("demo.txt", "Hello Mano ", (err) => {
  if (err) throw err;
  console.log("File written!");
});

