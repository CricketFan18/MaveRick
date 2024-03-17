import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
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
  const value = req.body.value;
  console.log(req.body);

  /*try {
    const result = await axios.get(API_URL + "/devices/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }*/
});





















/*
app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const update ={
    secret: req.body.secret,
    score: req.body.score
  };
  try{
    const result = await axios.post(API_URL+"/secrets", update , config);
    res.render("index.ejs", {content : JSON.stringify(result.data) });

  }catch(error){
    res.render("index.ejs", {content: JSON.stringify(error.response.data)});
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  const update ={
    secret: req.body.secret,
    score: req.body.score
  };
  try{
    const result = await axios.put(API_URL+"/secrets/"+searchId , update , config);
    res.render("index.ejs", {content : JSON.stringify(result.data)});
  }catch(error){
    res.render("index.ejs",{content : JSON.stringify(error.response.data)});
  }

  
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
});*/

