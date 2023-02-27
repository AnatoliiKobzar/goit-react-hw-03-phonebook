import React from 'react';
import { Formik, Field } from 'formik';
import { Button, ErrorMessage, Form, FormField } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { SlUserFollow } from 'react-icons/sl';

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,14}(\s*)?$/;

const FornSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short Name!')
    .max(20, 'Too Long Name!')
    .required('Required'),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

export const ContactForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
      validationSchema={FornSchema}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" type="text" autoComplete="off" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field name="number" type="text" autoComplete="off" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <Button type="submit">
          <SlUserFollow size="18px" />
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = { onSave: PropTypes.func.isRequired };
