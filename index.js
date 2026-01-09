const express = require('express')
const app = express();

app.listen(3000, () => {
  console.log('Connect on port 3000');
});

// app.get('/', (req, res) => {
//   res.send('<h2>Hello world !</h2>');
// });

app.get('/', (req , res) => {
    res.send('Welcome Home Page')
})

app.get('/user/:userid-:bookid', (req , res) => {
  res.send(req.params)
})

app.get('/search', (req , res) => {
  const name = req.query.name
  const age = req.query.age
  res.send(`Search result for Name : ${name} <br/> and Age ${age}`)
})


