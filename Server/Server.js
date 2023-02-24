const express = require('express')
const bodyParser = require('body-parser');
const Post_New_Note= require('./Controller/Post.js')
const Get_All_Notes = require('./Controller/Get_All');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.post('/new_note', Post_New_Note)
app.get('/Notes/:user',Get_All_Notes)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening on port ${port}!`))