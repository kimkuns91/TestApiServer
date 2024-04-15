export const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRouter = require("./routes/index");

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/api", mainRouter);

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;