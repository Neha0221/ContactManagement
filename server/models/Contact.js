const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true  // Prevent duplicate email addresses
  },
  phoneNumber: {
    type: String,
    required: true
  },
  company: String,
  jobTitle: String
}, { timestamps: true });  // Auto-create createdAt and updatedAt fields

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;