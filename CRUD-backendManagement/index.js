const express = require('express');
const app = express();
const PORT = 3000;

//DB connection
const conn = require('./config/db')
//Importing DB Schema
const Student = require('./model/student.model')

//Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.static('public/'))
app.use(express.json())




// app.get('/', (req, res) => {
//   res.render('home.ejs')
// })

//READ — Show all students
app.get("/", async (req, res) => {
  const students = await Student.find({});
  res.render("home.ejs", { students });
});


//CREATE - Show add page
app.get("/add", (req, res) => {
  res.render("add");
});


//INSERT
app.post("/add", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.redirect("/");
});

//UPDATE — show edit page
app.get("/edit/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
});


//UPDATE
app.post("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});



//DELETE
app.get("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});


//SERVER
app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`)
})