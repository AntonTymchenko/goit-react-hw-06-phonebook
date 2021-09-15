import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { connect } from "react-redux";
import phoneActions from "../redux/phone-actions";

const Filter = ({ onFilterChange }) => {
  return (
    <>
      <h2 className={s.contactTitle}>Contacts</h2>
      <label className={s.filterLabel}>
        Find contacts by the name
        <input
          type="text"
          onChange={onFilterChange}
          className={s.inputFilter}
          placeholder="Who are you looking for ?"
        />
      </label>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (e) =>
    dispatch(phoneActions.changeFilter(e.currentTarget.value)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
