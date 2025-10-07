import React, { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../services/api";
import "./ContactList.css"; // We'll make this

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await getContacts();
    console.log("Fetched contacts:", res.data);
    setContacts(res.data);
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
  <div className="contact-list">
    <h2>Contacts</h2>
    <div className="cards">
      {contacts.map((c) => (
        <div className="contact-card" key={c._id}>
          <h3>{c.name}</h3>
          <p>Email: {c.email}</p>
          <p>Phone: {c.phone}</p>
          <button className="delete-btn" onClick={() => handleDelete(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
);
}