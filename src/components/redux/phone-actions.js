import types from "./phone-types";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => {
  return {
    type: types.ADD,
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
};

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});
const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const startListOfContacts = (arr) => ({
  type: types.START_CONTACTS_ARR,
  payload: arr,
});
export default { addContact, deleteContact, changeFilter, startListOfContacts };
