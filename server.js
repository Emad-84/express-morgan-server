const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRourter = require("./routes/promotioRouter");
const partnerRouter = require("./routes/partnerRouter");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json()); //parse json data into js obj req.body
app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRourter);
app.use("/partners", partnerRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<html><body><h1>this is an Express server </h1></body></html>`);
});

app.listen(port, hostname, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});
