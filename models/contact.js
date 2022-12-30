const mongoose = require("./connection");

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
    type: String,
    email: String,
    address: String,
    additional: String,
    state: String,
    zipcode: String,
    details: String
}, {timestamps: true})

const Contact = mongoose.model("Contact", contactSchema);

// Exporting model of beings
module.exports = Contact;