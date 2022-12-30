// Importing Dependencies
require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const methodOverride = require("method-override")

// Creating application
const app = express();

// Middleware
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"))

// Initial page
app.get("/", (request, response) => {
    response.render("landing/landing.ejs")
})

app.get("/About", (request, response) => {
    response.render("landing/about.ejs")
})

app.get("/Contact", (request, response) => {
    response.render("landing/contact.ejs")
})

app.get("/Drivers", (request, response) => {
    response.render("landing/drivers.ejs")
})

app.get("/Clients", (request, response) => {
    response.render("landing/clients.ejs")
})



// App listener
const PORT = process.env.PORT || 3333
app.listen(PORT, (request, response) => {
    console.log(`Listening on port: ${PORT}`)
})