const mongoose = require("./connection");

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    message: String

})

const Contact = mongoose.model("Contact", beingSchema);

// Exporting model of beings
module.exports = Contact;