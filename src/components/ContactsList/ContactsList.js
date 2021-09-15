import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import { connect } from "react-redux";
import phoneActions from "../redux/phone-actions";
import { ContactsListItem } from "../ContactsListItem/ContactsListItem";

function ContactsList({ items, deleteContact }) {
  return (
    <>
      {!items || items.length === 0 ? (
        <p className="notifications">There are no any contacts...</p>
      ) : (
        <ul className={s.listContacts}>
          {items.map(({ id, name, number }) => (
            <ContactsListItem
              key={id}
              name={name}
              id={id}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
}

const getVisibleConatacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => ({
  items: getVisibleConatacts(state.contacts.items, state.contacts.filter),
});
const mapDispatchProps = (dispatch) => ({
  deleteContact: (id) => dispatch(phoneActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
