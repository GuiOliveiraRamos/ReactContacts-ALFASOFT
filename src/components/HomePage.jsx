import React from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactsList";

const HomePage = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
      <Link to="/forms">Add new contact</Link>
    </div>
  );
};

export default HomePage;
