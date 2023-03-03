import express, { Application } from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000");
})