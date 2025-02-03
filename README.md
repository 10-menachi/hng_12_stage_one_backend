## HNG Stage One Task

This project is my submission for the HNG Stage One task. It provides an API endpoint that takes in a number and returns interesting mathematical information about the number, including a fun fact from the [Numbers API](http://numbersapi.com/).

### Documentation

#### Project Description

This API endpoint was created as part of the HNG Stage One task. The task involves creating a simple API that returns a JSON response with the following fields:

- **Number**: The number that was passed in the request.
- **Is Prime**: A boolean value indicating whether the number is a prime number.
- **Is Perfect**: A boolean value indicating whether the number is a perfect number.
- **Properties**: An array of strings describing the properties of the number.
- **Digit Sum**: The sum of the digits of the number.
- **Fun Fact**: A fun fact about the number from the Numbers API.

#### Setup Instructions

To run the project locally, follow these steps:

1. **Clone the repository**:

   - Navigate to your preferred folder and clone the project using the following command:
     ```bash
     git clone https://github.com/10-menachi/hng_12_stage_zero.git
     ```
     > **Note:** If you don't have Git installed, you can follow this tutorial:  
     > [Download Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Navigate to the project directory**:

   - Change to the project directory using the following command:
     ```bash
     cd hng_12_stage_zero
     ```

3. **Install dependencies**:

   - Use npm to install the required dependencies:
     ```bash
     npm i
     ```
     > **Note:** If you don't have Node.js installed, you can follow this tutorial:  
     > [Download Node.js](https://nodejs.org/en/download)

4. **Run the project**:

   - Start the project with the following command:
     ```bash
     node index.js
     ```

5. **Access the endpoint**:
   - The server will start, and the port will be displayed on the console.
   - Access the API endpoint at the following URL to display the JSON response:
     ```bash
     http://localhost:3000/
     ```

#### API Documentation

- **Endpoint URL**:  
  `http://localhost:3000/`

- **Request Format**:  
  No parameters are required in the request.

- **Response Format**:  
  The API will return a JSON response with the following fields:

  ```json
  {
    "email": "timberwamalwa@yahoo.com",
    "iso_date_time": "2025-01-29T12:00:00.000Z",
    "repo_url": "https://github.com/10-menachi/hng_12_stage_zero"
  }
  ```

- **Example Usage**:
  - Make a GET request to `http://localhost:3000/`
  - The response will look like this:
    ```json
    {
      "email": "timberwamalwa@yahoo.com",
      "iso_date_time": "2025-01-29T12:00:00.000Z",
      "repo_url": "https://github.com/10-menachi/hng_12_stage_zero"
    }
    ```

#### Programming Language

This project is implemented using **Node.js**. If you're interested in hiring Node.js developers, you can check out the following link:  
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
