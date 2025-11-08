
# TASK 1 CRUD operations BACKEND (Node.js + Express + MongoDB)

A clean, modern, beginner‑friendly CRUD backend built using **Node.js**, **Express**, **MongoDB**, and **EJS**, following strict rules:

✅ Only **GET & POST** routes used
✅ Full CRUD (Create, Read, Update, Delete)
✅ Model stored separately in `/models/student.js`
✅ Views built using **Bootstrap (responsive + modern UI)**
✅ All backend logic written inside **index.js**

---

## 🚀 Features

* View all students
* Add new student
* Edit existing student
* Delete student
* Fully responsive UI using Bootstrap

---

## 📂 Folder Structure

```
project-folder/
│── index.js
│── config/
│     ├── db.js
│── model/
│     └── student.model.js
│── views/
│     ├── home.ejs
│     ├── add.ejs
│     └── edit.ejs
│── public/

```

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Bootstrap 5**
* **EJS templates**

---

## ▶️ Running the Project

### 1️⃣ Install Dependencies

```bash
npm install express mongoose ejs
```

### 2️⃣ Start MongoDB

```bash
mongod
```

### 3️⃣ Run the Server

```bash
node index.js or nodemon
```

Server runs at:
👉 **[http://localhost:3000/](http://localhost:3000/)**

---

## 📸 Screenshots

### ✅ Home Page (View All Students)

![Home Page Screenshot](./CRUD-backendManagement/screenshots/Screenshot2%20Task%201.png)

### ✅ Add Student Page

![Add Student Screenshot](./CRUD-backendManagement/screenshots/Screenshot3%20Task%201.png)

### ✅ Edit Student Page

![Edit Student Screenshot](./CRUD-backendManagement/screenshots/Screenshot1%20Task%201.png)

---

## ✅ CRUD Routes Overview (GET + POST ONLY)

| Operation         | Method | Route         |
| ----------------- | ------ | ------------- |
| Show all students | GET    | `/`           |
| Show add form     | GET    | `/add`        |
| Insert student    | POST   | `/add`        |
| Show edit form    | GET    | `/edit/:id`   |
| Update student    | POST   | `/update/:id` |
| Delete student    | GET    | `/delete/:id` |

---

## ✅ Student Model (`/model/student.model.js`)

```js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  course: String,
  batchCode: String,
  joiningDate: String,
  remarks: String,
});

module.exports = mongoose.model("Student", studentSchema);
```

---

## ✅ Author

Developed by **Sahil Tapkir**

---