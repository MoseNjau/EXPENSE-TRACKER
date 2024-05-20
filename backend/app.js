const express = require('express');
const {db} = require('./db/db');
const cors = require('cors');
const {readdirSync} = require('fs')

const app = express();

require('dotenv').config()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/vi', require('./routes/' + route)))
app.get('/', (req, res) => {
    res.send("Hello world")
})

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log("Listening to port:", PORT);
    })
}
server()