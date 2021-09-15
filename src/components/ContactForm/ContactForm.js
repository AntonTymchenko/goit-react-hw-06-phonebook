import { useState, useEffect } from "react";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneActions from "../redux/phone-actions";

function ContactForm({ contacts, onSubmit, renderContactFromLocal }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function inputGetValue(e) {
    const item = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (item) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  }
  useEffect(() => {
    const contactsLocat = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsLocat);
    if (!parsedContacts) {
      return;
    }

    renderContactFromLocal(parsedContacts);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function formHandleSubmit(e) {
    e.preventDefault();
    if (contacts.some((item) => item.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    onSubmit(name, number);
    clearState();
  }
  const clearState = () => {
    setNumber("");
    setName("");
  };
  return (
    <form onSubmit={formHandleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.inputName}
          onChange={inputGetValue}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Ivan Ivanov"
        />
      </label>
      <label>
        Number
        <input
          className={s.inputFrom}
          onChange={inputGetValue}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="098 111 22 33"
        />
        <button type="submit" className={s.AddBtn}>
          Add contact
        </button>
      </label>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(phoneActions.addContact(name, number)),
  renderContactFromLocal: (arr) =>
    dispatch(phoneActions.startListOfContacts(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
