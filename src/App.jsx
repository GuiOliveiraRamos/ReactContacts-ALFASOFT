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
    setContacts([...contacts, newContact]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage contacts={contacts} onAddContact={handleAddContact} />
          }
        />
        <Route
          path="/forms"
          element={<ContactForm onAddContact={handleAddContact} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
