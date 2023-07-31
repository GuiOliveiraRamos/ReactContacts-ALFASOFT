import React, { useState } from "react";
import ContactList from "./ContactsList";

const HomePage = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "João",
      contact: "123789456",
      email: "joao@teste.com",
      image: "joao.jpg",
    },
    {
      id: 2,
      name: "Guilherme",
      contact: "123456789",
      email: "guilherme@teste.com",
      image: "guilherme.jpg",
    },
  ]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: "New Contact",
      contact: "987654321",
      email: "newcontact@test.com",
      image: "default.jpg",
    };

    if (newContact.name.length <= 5) {
      alert("Name should be a string with more than 5 characters.");
      return;
    }

    if (newContact.contact.length !== 9 || isNaN(newContact.contact)) {
      alert("Contact should be a 9-digit number.");
      return;
    }

    if (!isValidEmail(newContact.email)) {
      alert("Invalid email address.");
      return;
    }

    setContacts([...contacts, newContact]);
  };
  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList contacts={contacts} />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default HomePage;
