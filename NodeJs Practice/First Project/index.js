const express = require('express')
const app = express();

app.listen(3000, () => {
  console.log('Connect on port 3000');
});

app.set('view engine' , 'ejs')

app.use(express.json())

// app.get('/', (req , res) => {
//     res.jsonp({name: "Rizwan Ali"})
// })

// app.get('/about', (req , res) => {
//   if(req.accepts('html')){
//     res.send("<h1>Hello Html</h1>")
//   }else if(req.accepts('json')){
//     res.send({message : "Hello Json"})
//   } else if(req.accepts('xml')){
//     res.send({message : "Hello XML"})
//   }else {
//     res.send("Not Support")
//   }
// })


// app.get('/about', (req , res) => {
//   res.send(req.headers.host)
// })


app.post('/about', (req , res) => {
  res.send()
})


