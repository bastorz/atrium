import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route";
import authRoute from "./routes/post.route";
import testRoute from "./routes/post.route";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("api/posts", postRoute);
app.use("api/auth", authRoute);
app.use("api/test", testRoute);

app.listen(8000, () => {
  console.log("Server is running");
});

// app.use("/api/test", (req, res) => {
//     res.send("It works");
//   });

//   app.use("/api/auth/register", (req, res) => {
//     res.send("It works");
//   });
//   app.use("/api/auth/login", (req, res) => {
//     res.send("It works");
//   });
//   app.use("/api/auth/logout", (req, res) => {
//     res.send("It works");
//   });
//   app.use("/api/posts/", (req, res) => {
//     res.send("It works");
//   });
//   app.use("/api/posts/", (req, res) => {
//     res.send("It works");
//   });
