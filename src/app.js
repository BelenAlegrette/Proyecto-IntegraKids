const express = require("express");
const path = require("path");
const mainRouter = require("./routers/mainRouter");
const app = express();

app.use(mainRouter);
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));