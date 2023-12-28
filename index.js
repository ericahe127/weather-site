import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

var key = "dd0a7e0038b339db4d7dc345d05cfca7";
var url = "https://api.openweathermap.org/data/3.0/onecall?";
var units = "metric";


app.get("/", (req,res)=>{
    res.render("index.ejs", { content: "Waiting for data..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});