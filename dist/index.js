import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.status(200).json("Hello from the server!!!");
});
app.listen(4000, () => {
    console.log(`App is listening on port 4000`);
});
