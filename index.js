import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
let data ={};
const port = 3000;
const API_URL = "https://kodessphere-api.vercel.app";

const yourBearerToken = "HxMvgPp";

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/devices", async (req, res) => {
  const device = req.body.device;
  if(device === "fan")
  {
    let value= parseInt(req.body.value);
    data = {
    teamid: "HxMvgPp",
    device: device,
    value: value
    }
  }
  else if(device === "bulb")
  {
    let value = parseInt(req.body.value);
    data = {
      teamid: "HxMvgPp",
      device: device,
      value: value
      }
  }
  else if(device === "ac")
  {
    let temp = parseInt(req.body.value);
    let state = parseInt(req.body.state);
    data = {
      teamid: "HxMvgPp",
      device: device,
      value: {
        "temp": temp,
        "state": 0
      }
      }
  }
  else
  {
    let color = req.body.value;
    data = {
      teamid: "HxMvgPp",
      device: device,
      value: color
      }
  }

  console.log(data);

  try {
    const result = await axios.post(API_URL + "/devices", data);
    console.log(result.data);
  } catch (error) {
    res.send("Error");
  }
});
