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

app.get("/api/classify-number", async (req, res) => {
  const number = req.query.number;

  console.log(number);

  if (isNaN(number)) {
    return res.status(400).json({
      error: true,
      number: number,
    });
  }

  const properties = [];
  if (is_armstrong(number)) properties.push("armstrong");
  properties.push(is_even(number) ? "even" : "odd");

  let fun_fact = "Fun fact not available.";
  try {
    const { data } = await axios.get(`http://numbersapi.com/${number}/math`);
    fun_fact = data;
  } catch (error) {
    console.error("Error fetching fun fact", error.message);
  }

  res.status(200).json({
    number,
    is_prime: is_prime(number),
    is_perfect: is_perfect(number),
    properties,
    digit_sum: sum_of_digits(number),
    fun_fact,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
