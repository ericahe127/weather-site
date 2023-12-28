import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

var key = "dd0a7e0038b339db4d7dc345d05cfca7";
var url = "https://api.openweathermap.org/data/2.5/weather";
var units = "metric";


app.get("/", (req,res)=>{
    res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get", async (req,res)=>{
    const lat = req.body.lat;
    console.log(lat);
    const lon = req.body.lon;
    console.log(lon);
    try {
    const result = await axios.get(url , {
        params : {
            appid: key,
            lat : lat,
            lon: lon,
            units: units,
        },
    });
    // console.log(JSON.stringify(result.data));
    console.log(result.data);
    res.render("index.ejs", {data: result.data});

  } catch (error) {
    console.log(JSON.stringify(error.response.data))
    res.render("index.ejs", { data: JSON.stringify(error.response.data) });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});