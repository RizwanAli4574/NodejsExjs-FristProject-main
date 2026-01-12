import express from 'express'
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page 2' , message: 'Welcome to the about page'})
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})