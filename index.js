const express = require("express");
const cors = require("cors");
const axios = require("axios");
const {
  sum_of_digits,
  is_armstrong,
  is_even,
  is_prime,
  is_perfect,
} = require("./utils");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/classify-number", async (req, res) => {
  const number = parseInt(req.query.number, 10);

  if (isNaN(number)) {
    return res.status(400).json({
      number: req.query.number,
      error: true,
    });
  }

  const properties = [];
  if (is_armstrong(number)) {
    properties.push("armstrong");
  }
  if (is_even(number)) {
    properties.push("even");
  } else {
    properties.push("odd");
  }

  let fun_fact = "";

  try {
    const url = `http://numbersapi.com/${number}`;
    const response = await axios.get(url);
    fun_fact = response.data;
  } catch (error) {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  res.status(200).json({
    number: number,
    is_prime: is_prime(number),
    is_perfect: is_perfect(number),
    properties,
    digit_sum: sum_of_digits(number),
    fun_fact,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
