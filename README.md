# MERN Blog Application 📝

A full-stack MERN (MongoDB, Express, React, Node.js) blog platform that allows users to:

- 🧠 Register and log in
- ✍️ Create blog posts
- 📄 View all posts
- 📚 View post details
- 🎨 Clean, styled UI using Tailwind CSS

---

## 📁 Project Structure

```
mern-blog/
├── client/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
├── server/        # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js
- MongoDB installed locally or use MongoDB Atlas

---

### 🔨 Backend Setup

```bash
cd server
npm install
```

**Environment Variables** (`.env`):
```
MONGO_URI=mongodb://localhost:27017/mern-blog
PORT=5000
```

```bash
npm start
```

> Server runs on `http://localhost:5000`

---

### 💻 Frontend Setup

```bash
cd client
npm install
```

If using Tailwind CSS:
```bash
npx tailwindcss init -p
```

Then configure `tailwind.config.js` and update `index.css` as needed.

```bash
npm run dev
```

> Frontend runs on `http://localhost:5173`

---

## 🔑 Features

- 🔐 User authentication (Register / Login)
- ✍️ Create blog post
- 📃 View blog posts
- 🗃️ Filter posts by category or slug
- 🧼 Tailwind CSS styling
- 📡 Axios for API calls
- 💾 MongoDB for storage

---

## 🌐 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Posts
- `GET /api/posts`
- `POST /api/posts`

---

## 🙌 Author

Created by **Francis Auka**  
📧 Feel free to connect or fork!

---

## 🧪 Test Data

Use Postman or your frontend forms to test:
```json
{
  "title": "First Blog",
  "content": "This is a test post.",
  "author": "Francis",
  "slug": "first-blog",
  "category": "6543210987654321abcd1234"
}
```

---

## ✅ Status

- ✅ Backend setup complete
- ✅ React pages created
- ✅ Post creation and viewing works
- 🔄 Styling in progress
