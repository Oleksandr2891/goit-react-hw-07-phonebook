import { FormWrapper } from "./FormStyled";
import { connect, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getContactsList } from "../../redux/selector";

const Form = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const isContact = contacts.some((item) => item.name === name);
    if (!isContact) {
      dispatch(addContact({ name, number }));
      setName("");
      setNumber("");
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="input"
          onChange={handleChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          required
        />
      </label>
      <label>
        Number
        <input
          className="input"
          onChange={handleChangeInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="buttonSubmit">
        Add contact
      </button>
    </FormWrapper>
  );
};

export default Form;
