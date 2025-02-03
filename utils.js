const is_armstrong = (num) => {
  const numStr = num.toString();
  const power = numStr.length;
  return (
    numStr
      .split("")
      .reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0) === num
  );
};

const is_even = (num) => num % 2 === 0;

const is_prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const is_perfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

const sum_of_digits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

module.exports = { is_armstrong, is_even, is_prime, is_perfect, sum_of_digits };
