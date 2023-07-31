import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.name}</strong>
          <img src={contact.image} alt={contact.name} />
          <p>Contact: {contact.contact}</p>
          <p>Email: {contact.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
