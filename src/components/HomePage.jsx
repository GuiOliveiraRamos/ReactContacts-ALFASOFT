import React from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactsList";

const HomePage = ({ contacts, onDeleteContact, onEditContact }) => {
  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList
        contacts={contacts}
        onDeleteContact={onDeleteContact}
        onEditContact={onEditContact}
      />
      <Link to="/forms">Add new contact</Link>
    </div>
  );
};

export default HomePage;
