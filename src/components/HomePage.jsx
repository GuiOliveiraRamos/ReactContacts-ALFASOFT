import React, { useEffect } from "react";
import ContactList from "./ContactsList";
import { Link } from "react-router-dom";

const HomePage = ({ contacts }) => {
  return (
    <div>
      <h1>Contacts List</h1>
      <ContactList contacts={contacts} />
      <Link to="/forms">Add new contact</Link>
    </div>
  );
};

export default HomePage;
