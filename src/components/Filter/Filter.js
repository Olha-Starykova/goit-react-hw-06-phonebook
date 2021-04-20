import React from 'react';
import PropTypes from "prop-types";
import './Filter.css'

//его стейт в арр

const Filter = ({ filter, onChange }) => (
  <label className="label">
    Find contacts by name
    <input type="text" value={filter} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;