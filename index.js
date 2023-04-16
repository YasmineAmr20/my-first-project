import express from "express";
import { engine } from 'express-handlebars';
import studentRouter from "./routers/studentRouter.js"
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.listen(2020);
// ------------------------------------------------------


app.use("/students",studentRouter);