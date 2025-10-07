import React from "react";
import { deleteContact } from "../services/api";

export default function DeleteContact({ id, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await deleteContact(id);
      onDelete();
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
  );
}