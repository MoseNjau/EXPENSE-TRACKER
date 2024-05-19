npm init
npm install epress mongoose cors nodemon
npm install dotenv

require('dotenv'): This line imports the dotenv package into our Node.js application.  The config() function reads the contents of the .env file and adds them as key-value pairs to the process.env object.
example, an environment variable named PORT might be used to specify the port on which a server should listen for incoming requests. Another environment variable named DATABASE_URL might contain the connection string for a database.
Environment variables are stored in the process.env object, and PORT is typically used to specify the port number on which the server should listen for incoming requests.
