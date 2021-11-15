const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()
const cors = require("cors")
require("dotenv").config({ path: "./config/.env" })
require("./config/db_connect")
const usersRoutes = require("./routes/users.routes")
const productsRoutes = require("./routes/products.routes")
const clientsRoutes = require("./routes/clients.routes")
const commandsRoutes = require("./routes/commands.routes")
const logInOutRoutes = require("./routes/logInOut.routes")
const checkLogin =require ("./middleware/checkLogin")

const corsOptions = "http://localhost:3000";

// Middleware
//for our server to be able to read the “body” of an incoming JSON object
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

//app.get('*', checkLogin)
//app.post('*', checkLogin)
//app.put('*', checkLogin)
//app.delete('*', checkLogin)

app.use('/login', logInOutRoutes )
app.use('/admin/users', usersRoutes )
app.use('/admin/products', productsRoutes )
app.use('/admin/clients', clientsRoutes )
app.use('/admin/commands', commandsRoutes )




// server
app.listen(process.env.PORT, () => {
    console.log(`connect to http://localhost:${process.env.PORT}`);
})