import React from "react";
import { styled } from "styled-components";

const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDelete = (id) => {
    onDeleteContact(id);
  };

  return (
    <Container>
      {contacts.map((contact) => (
        <Contact key={contact.id}>
          <CardHeader>
            <img src={contact.image} alt={contact.name} />
            <h2>{contact.name}</h2>
          </CardHeader>
          <p>
            <strong>Contact</strong>: {contact.contact}
          </p>
          <p>
            <strong>Email</strong>: {contact.email}
          </p>
          <CardFooter>
            <button>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </CardFooter>
        </Contact>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Contact = styled.div`
  margin: 0 20px 0 20px;
  width: 250px;
  height: 200px;
  padding: 15px;
  border-radius: 20px;
  background-color: #a7a7cc;
  div {
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    padding: 5px;
    border-radius: 5px;
    background-color: #8282fc;
  }
`;

export default ContactList;
