const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();

// Routes
const postRoute = require("./routes/post.route");

app.use(express.json());

app.use("/api/post", postRoute);

// app.get("/");

// app.get("/post", (req, res) => {
//   res.status(400).json({ massage: "Hello world" });
// });

// app.post("/", async (req, res) => {
//   try {
//     const { title, body } = req.body;

//     const newPost = await postModel.create({ title, body });
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

const DB_URL__MONGODB = process.env.DB_URL;

const PORT = process.env.PORT || 8080;

const dbConnected = async () => {
  try {
    await mongoose
      .connect(DB_URL__MONGODB)
      .then(() => console.log("DB connected"));
    app.listen(PORT, () =>
      console.log(`Listening on -- http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`Error connecting with DB - ${error}`);
  }
};
dbConnected();
