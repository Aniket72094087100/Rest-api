const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
// views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// public
app.set(express.static(path.join(__dirname, "public")));
// post body middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("server is working fine");
});
app.listen(port, () => {
  console.log(`listening to post: ${port}`);
});
