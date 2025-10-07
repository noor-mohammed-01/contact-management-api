import React from "react";
import AddContactForm from "../components/AddContactForm";
import ContactList from "../components/ContactList";

export default function Home() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div>
      <h1>Contact Management</h1>
      <AddContactForm onAdd={() => setRefresh(!refresh)} />
      <ContactList key={refresh} />
    </div>
  );
}