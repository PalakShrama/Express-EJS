📌"AURA" Express + EJS Fashion Explorer
E-commercial fashion explorer and user authentication web application built with Node.js, Express, MongoDB, and EJS.
It combines a stylish front‑end for browsing outfit inspirations with a secure backend for user registration and login.

Users can:

Explore outfit categories (Boho, Indo‑Western, Streetwear, Formal, etc.).

Register with email and password (stored securely with bcrypt hashing).

Log in to their account and validate credentials.

View personalized content once authenticated.

🛠 Tech Stack
Backend: Express, Mongoose, Morgan

Database: MongoDB (collections: users, men, etc.)

Frontend: EJS, HTML5, CSS3

Authentication: bcrypt for password hashing

Development Tools: Nodemon for auto‑restart, MongoDB Compass for DB inspection

📂 Folder Structure
Code
Task1/
│── app.js              # Express server setup & routes
│── config/
│    └── db.js          # MongoDB connection
│── models/
│    └── user.js        # User schema with bcrypt hashing
│── public/             # Static assets (CSS, images)
│── views/
│    ├── index.ejs      # Homepage (Explore Outfits)
│    └── login.ejs      # Login page
│── package.json        # Dependencies & scripts
⚙️ Features
Homepage: Outfit categories displayed with images (Boho, Indo‑Western, Streetwear, Formal, Fusion, Minimalist, Ethnic, Party, Casual, Workwear, Traditional, Festive).

Registration: /get-form-data route saves new users to MongoDB with hashed passwords.

Login: /login route validates credentials using comparePassword.

Static Assets: Served from /public (CSS, images).

Logging: Morgan middleware logs HTTP requests.

🚀 Running Locally
Install dependencies

bash
npm install
Start MongoDB

bash
mongod
or use MongoDB Compass to connect to localhost:27017.

Run server

bash
npm run dev
Server runs at: http://localhost:3000

🔐 Authentication Flow
Registration

Form posts to /get-form-data.

User saved with hashed password.

Example document in MongoDB:

json
{
  "email": "user@example.com",
  "password": "$2b$10$hashedPasswordString",
  "_id": "ObjectId",
  "__v": 0
}
Login

Form posts to /login.

Backend checks if email exists.

Password compared using bcrypt.compare.

On success → redirect to homepage or dashboard.