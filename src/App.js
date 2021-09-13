import ContactList from "./Componenets/ContactList/ContactList";
import FIlter from "./Componenets/Filter/FIlter";
import Form from "./Componenets/Form/Form";
import Section from "./Componenets/Section/Section";
import GlobalStyles from "../src/style/GlobalStyle";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        alert("нет такой кнопки");
    }
  };

  return (
    <>
      <GlobalStyles />
      <Section title={"Phonebook"}>
        <Form
          name={name}
          number={number}
          handleChangeInput={handleChangeInput}
          resetForm={resetForm}
        />
      </Section>
      <Section title={"Contacts"}>
        <div className="contactsWrapper">
          <FIlter />
          <ContactList />
        </div>
        <ToastContainer />
      </Section>
    </>
  );
}
