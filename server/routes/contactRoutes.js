// routes/contactRoutes.js

const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

// @route   POST /contacts
// @desc    Create a new contact
router.post('/contacts', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  try {
    // Check if contact with given email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newContact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
    const savedContact = await newContact.save();
    
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

// @route   GET /contacts
// @desc    Get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// @route   PUT /contacts/:id
// @desc    Update a contact by ID
router.put('/contacts/:id', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  try {
    // Find contact by ID and update
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
      firstName, lastName, email, phoneNumber, company, jobTitle }, { new: true }
    );

    if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// @route   DELETE /contacts/:id
// @desc    Delete a contact by ID
router.delete('/contacts/:id', async (req, res) => {
  try {
    const result = await Contact.findByIdAndDelete(req.params.id);
    
    if (!result) return res.status(404).json({ error: 'Contact not found' });

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

module.exports = router;