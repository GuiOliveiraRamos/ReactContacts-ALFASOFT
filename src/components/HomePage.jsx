import React from "react";
import ContactList from "./ContactsList";

const HomePage = () => {
  const contacts = [
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
  ];

  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default HomePage;
