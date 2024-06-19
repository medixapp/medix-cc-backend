# API For Medix

Api development for Medix on Node.js

# Languages and Tools

![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=plastic&logo=google-cloud&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=plastic&logo=docker&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB) ![Visual Studio Code](https://img.shields.io/badge/VSCode-0078D4?style=plastic&logo=visual%20studio%20code&logoColor=white)

# Google Cloud Architecture

![GC](https://github.com/medixapp/medix-cc-backend/blob/main/gc_architecture.png)

# Running This Project

Clone the project

```bash
  git clone https://github.com/medixapp/medix-cc-backend.git
```

Go to the project directory

```bash
  cd medix-cc-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

# API Reference

This document provides a detailed reference for the API endpoints. It covers the methods, paths, request parameters, headers, and bodies for each endpoint.

## AUTH

### Register

**Component:** User Registration

**Method:** `POST`

**Path:** `/register`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"username": "string",
	"email": "string",
	"password": "string"
}
```

### Login (Express-session)

**Component:** User Login with Express-session

**Method:** `POST`

**Path:** `/login`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"email": "string",
	"password": "string"
}
```

### Login (JWT)

**Component:** User Login with JWT

**Method:** `POST`

**Path:** `/login`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"email": "string",
	"password": "string"
}
```

### Logout

**Component:** User Logout

**Method:** `POST`

**Path:** `/logout`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

---

## PROFILE

### Get Profile

**Component:** Retrieve User Profile with JWT

**Method:** `GET`

**Path:** `/profile`

#### Request Header

| Key           | Value                | Description                                                      |
| ------------- | -------------------- | ---------------------------------------------------------------- |
| Authorization | Bearer `<JWT_TOKEN>` | The access token used, ada spasi antara Bearer dan `<JWT_TOKEN>` |

#### Request Body

None

### Update Profile

**Component:** Update User Profile with JWT

**Method:** `POST`

**Path:** `/profile/update`

#### Request Header

| Key           | Value                | Description                                                      |
| ------------- | -------------------- | ---------------------------------------------------------------- |
| Content-Type  | multipart/form-data  | Specifies the media type                                         |
| Authorization | Bearer `<JWT_TOKEN>` | The access token used, ada spasi antara Bearer dan `<JWT_TOKEN>` |

#### Request Body

| Key          | Value  | Description                  |
| ------------ | ------ | ---------------------------- |
| description  | string | For description (optional)   |
| profileImage | file   | For profile image (optional) |

---

## ARTICLE

### Add Article (Server side)

**Component:** Add a new article

**Method:** `POST`

**Path:** `/article`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"title": "string",
	"image": "string",
	"content": "string"
}
```

### Get All Articles

**Component:** Retrieve all articles

**Method:** `GET`

**Path:** `/article`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

### Get Article Detail

**Component:** Retrieve article details

**Method:** `GET`

**Path:** `/article/:id`

#### Request Params or Query

| Key | Value  | Example | Description                   |
| --- | ------ | ------- | ----------------------------- |
| id  | number | 1       | Id artikel yang ingin dilihat |

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

### Delete Article (Server side)

**Component:** Delete an article

**Method:** `DELETE`

**Path:** `/article/:id`

#### Request Params or Query

| Key | Value  | Example | Description                     |
| --- | ------ | ------- | ------------------------------- |
| id  | number | 1       | Id artikel yang ingin di delete |

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

---

## MACHINE LEARNING

### Add Predict Embedding

**Component:** Predict Embedding

**Method:** `POST`

**Path:** `/predict/embedding`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"text": "<text_to_predict>"
}
```

### Add Predict oneHot

**Component:** Predict OneHot Encoding

**Method:** `POST`

**Path:** `/predict/onehot`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"inputSymptoms": ["<symptom_1>", "<symptom_2>", "..."]
}
```

### Chat bot

#### Answer Question

**Component:** Chat bot question

**Method:** `POST`

**Path:** `/answer`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

```json
{
	"question": "string"
}
```

### Get all prediction

**Component:** Retrieve all predictions

**Method:** `GET`

**Path:** `/predict`

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

### Get Prediction by label (for Medicine Button)

**Component:** Retrieve prediction by label

**Method:** `GET`

**Path:** `/predict/:label`

#### Request Params or Query

| Key   | Value  | Example | Description                 |
| ----- | ------ | ------- | --------------------------- |
| label | string |         | Label prediksi yang dicari. |

#### Request Header

| Key          | Value            | Description              |
| ------------ | ---------------- | ------------------------ |
| Content-Type | application/json | Specifies the media type |

#### Request Body

None

---

# Documentation

[Documentation](https://docs.google.com/document/d/1W3uL6RJ0QGhFOR1FZxv2F5wMbtAi_iMV1TbxRax3M-k/)

# API Access Links

 - [API Server1](https://server1-fdbe4vnhta-et.a.run.app)
 - [API Server2](https://server2-fdbe4vnhta-et.a.run.app)


# Authors

- [@Muhammad Ridho](https://www.github.com/ridho237)
- [@Arifin Ilham Muttaqin](https://github.com/AL1isHere)

# Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MODEL_OneHot`

`MODEL_Embedding`

`JWT_SECRET`

`PORT`
