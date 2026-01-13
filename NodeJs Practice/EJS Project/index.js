import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
//   let items = ["Apple", "Banana", "Orange" , "Mango" , "Grapes" , "Watermelon"];
var users = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Bob",
        age: 35,
        city: "Chicago"
    },
    {
        name: "Alice",
        age: 28,
        city: "San Francisco"
    },
    {
        name: "Mike",
        age: 40,
        city: "Houston"
    },
]
  res.render("about", { title: "About Page 2", message: "", items: users });
});

app.get('/form', (req , res) => {
    res.render("form" , {message: null})
})

app.post('/submit', (req , res) => {
    const name = req.body.name;
    const message = `Hello ${name} Welcome to our website`;
    res.render("form", {message: message})
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
