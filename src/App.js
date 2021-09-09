import ContactList from "./Componenets/ContactList/ContactList";
import FIlter from "./Componenets/Filter/FIlter";
import Form from "./Componenets/Form/Form";
import Section from "./Componenets/Section/Section";
import GlobalStyles from "../src/style/GlobalStyle";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Section title={"Phonebook"}>
        <Form />
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
