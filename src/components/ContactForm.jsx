import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ContactForm = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    contact: "",
    email: "",
    image: "",
  });

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = (event) => {
    event.preventDefault();

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

    if (!newContact.image) {
      alert("Image is required.");
      return;
    }

    onAddContact(newContact);

    setNewContact({ name: "", contact: "", email: "", image: "" });

    navigate("/");
  };

  return (
    <Body>
      <Formulario onSubmit={handleAddContact}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact
          <br />
          <input
            type="text"
            name="contact"
            value={newContact.contact}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <br />
          <input
            type="text"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Image
          <br />
          <input
            type="text"
            name="image"
            value={newContact.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </Formulario>
    </Body>
  );
};
const Body = styled.body`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Formulario = styled.form`
  background-color: #a7a7cc;
  border-radius: 20px;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    padding: 5px;
    border-radius: 5px;
    background-color: #8282fc;
  }
`;

export default ContactForm;
