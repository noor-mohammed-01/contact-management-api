import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";
import { createContact } from "./services/api";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdd = async (contact) => {
    await createContact(contact); // ✅ Add contact to backend
    setRefreshKey(oldKey => oldKey + 1); // ✅ Refresh list
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <AddContactForm onAdd={handleAdd} />
        <ContactList key={refreshKey} />
      </div>
    </div>
  );
}

export default App;
