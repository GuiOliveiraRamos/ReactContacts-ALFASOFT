import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import HomePage from "./components/HomePage";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const existingContact = contacts.find(
      (contact) =>
        contact.name === newContact.name || contact.email === newContact.email
    );

    if (existingContact) {
      alert("Contact or email already exists.");
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleEditContact = (editedContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.map((contact) =>
        contact.id === editedContact.id ? editedContact : contact
      );
      return updatedContacts;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              contacts={contacts}
              onAddContact={handleAddContact}
              onDeleteContact={handleDeleteContact}
              onEditContact={handleEditContact}
            />
          }
        />
        <Route
          path="/forms"
          element={
            <ContactForm
              onAddContact={handleAddContact}
              onEditContact={handleEditContact}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
