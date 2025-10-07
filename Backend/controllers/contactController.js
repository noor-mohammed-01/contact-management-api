const Contact = require("../models/Contact");

// Create contact
const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({ message: "Please fill all fields" });
    return;
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts); // ✅ must send array directly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContact = createContact;