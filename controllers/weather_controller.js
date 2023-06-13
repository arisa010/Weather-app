const express = require("express")
const router = express.Router()
const fetch = require("node-fetch");
const apiKey = process.env.weather_api_key

router.get("/", (req, res) => {
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

  

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => res.json(data))
});

module.exports = router
