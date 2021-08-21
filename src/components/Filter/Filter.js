import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import styles from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
        autoComplete="off"
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({
  filter: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.contact_filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
