import { FormField } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <FormField>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FormField>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
