import axios from "axios";

const API_URL = "http://localhost:5000/api/contacts"; // ✅ Adjust to match backend route

export const getContacts = async () => {
  try {
    const res = await axios.get(API_URL);
    return res; // ✅ Must return res
  } catch (err) {
    console.error("Error fetching contacts:", err);
  }
};

export const createContact = async (contact) => {
  try {
    const res = await axios.post(API_URL, contact);
    console.log("Contact added:", res.data);
    return res;
  } catch (err) {
    console.error("Error adding contact:", err);
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res;
  } catch (err) {
    console.error("Error deleting contact:", err);
  }
};
