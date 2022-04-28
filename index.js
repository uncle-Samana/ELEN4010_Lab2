const path = require('path')
const express = require('express')
const { dirname } = require('path')
//const app = express()

const mainRouter = require('./mainRoutes')
// mainRouter.get('/', function(req, res){
//     res.send('Hello World')
// })

// mainRouter.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

app.use(mainRouter)

const port = process.env.PORT
app.listen(port)
console.log('Expresss server running on port 3000', port)