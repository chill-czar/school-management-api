Collecting workspace information

Sure, here is a `README.md` file for your repository:

````markdown
# School Management API

This is a simple School Management API built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd school-management-api
```
````

2. Install the dependencies:

```sh
npm install
```

3. Create a

.env

file in the root directory and add the following environment variables:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
```

## Running the Server

Start the server with the following command:

```sh
npm start
```

The server will start on the port specified in the

.env

file (default is 3000).

## API Endpoints

### Add a School

- **URL:** `/api/addSchool`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```
- **Success Response:**
  - **Code:** `201`
  - **Content:**
    ```json
    {
      "message": "School added successfully",
      "id": "<school-id>"
    }
    ```
- **Error Response:**
  - **Code:** `400`
  - **Content:**
    ```json
    {
      "error": "<validation-error-message>"
    }
    ```
  - **Code:** `500`
  - **Content:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

### List Schools

- **URL:** `/api/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  -

latitude

(required)

-

longitude

(required)

- **Success Response:**
  - **Code:** `200`
  - **Content:**
    ```json
    [
      {
        "_id": "<school-id>",
        "name": "School Name",
        "address": "School Address",
        "location": {
          "type": "Point",
          "coordinates": [98.765432, 12.345678]
        },
        "distance": 1.234 // Distance in kilometers
      },
      ...
    ]
    ```
- **Error Response:**
  - **Code:** `400`
  - **Content:**
    ```json
    {
      "error": "Latitude and longitude are required"
    }
    ```
  - **Code:** `500`
  - **Content:**
    ```json
    {
      "error": "Internal server error"
    }
    ```

## License

This project is licensed under the ISC License.

```

This `README.md` file provides an overview of the project, installation instructions, how to run the server, and details about the API endpoints.
This `README.md` file provides an overview of the project, installation instructions, how to run the server, and details about the API endpoints.
```
