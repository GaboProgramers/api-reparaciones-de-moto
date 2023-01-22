// ? Rquerimos dotenv Para las variables de entorno.
require('dotenv').config()

// ? En esta instancia requerimos nuestro servidor desde su ruta de origen.
const Server = require("./models/server")

// ? Con esta instancia declaramos la variale a la cual vamos a
// ? igualar con el constructor de nuestro servidor.
const server = new Server()

// ? En esta parte vamos a poner a escuchar nuestro servidor..
server.listen()