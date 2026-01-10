const express = require('express')
const app = express();

app.listen(3000, () => {
  console.log('Connect on port 3000');
});

app.set('view engine' , 'ejs')

app.use(express.json())

app.get('/', (req , res) => {
    res.jsonp({name: "Rizwan Ali"})
})

app.post('/about', (req , res) => {
    res.send(req.body)
})



