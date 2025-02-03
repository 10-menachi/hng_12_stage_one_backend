## HNG Stage One Task

This project is my submission for the HNG Stage One task. It provides an API endpoint that takes in a number and returns interesting mathematical information about the number, including a fun fact from the [Numbers API](http://numbersapi.com/).

---

## Documentation

### Project Description

The API receives a number via query parameters and responds with JSON data containing:

- **Number**: The input number.
- **Is Prime**: A boolean indicating whether the number is prime.
- **Is Perfect**: A boolean indicating whether the number is a perfect number.
- **Properties**: An array of properties associated with the number (e.g., odd, even, Armstrong).
- **Digit Sum**: The sum of the digits of the number.
- **Fun Fact**: A fun fact about the number retrieved from the Numbers API.

---

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/10-menachi/hng_12_stage_one_backend.git
```

#### 2. Navigate to the Project Directory

```bash
cd hng_12_stage_one_backend
```

#### 3. Install Dependencies

```bash
npm install
```

> **Note:** Ensure you have [Node.js](https://nodejs.org/en/download) installed.

#### 4. Run the Server

```bash
npm run dev
```

> The server will start and listen on a specified port.

#### 5. Access the API

- API will be available at:
  ```
  http://localhost:3000/api/classify-number?number=371
  ```
- Use tools like Postman or a web browser to test it.

---

### API Documentation

#### Endpoint

```
GET /api/classify-number?number=<integer>
```

#### Response Format

**Success (200 OK):**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**Bad Request (400):**

```json
{
  "number": "alphabet",
  "error": true
}
```

---
