const express = require('express');
const { db } = require('./db/db');
const cors = require('cors');
const { readdirSync } = require('fs');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000; // Fallback to 5000 if PORT is not defined

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').forEach((routeFile) => {
    const route = require(`./routes/${routeFile}`);
    app.use('/api/v1', route);
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`Listening to port: ${PORT}`);
    });
}

server();
