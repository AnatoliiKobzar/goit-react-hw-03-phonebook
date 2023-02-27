import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  max-width: 450px;
  padding: 16px;
  border: 1px solid #999;
  border-radius: 16px;
  box-shadow: 10px 10px 15px 5px rgba(255, 110, 48, 0.4);
  color: #ffffff;
  background-color: #1e252b;
`;

export const FormField = styled.label`
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled(FormikError)`
  color: #ff6e30;
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 40px;
  padding: 0px 9px;
  margin: 0;
  /* min-width: 92px; */
  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: #fdf5ff;
  background-color: #ff6e30;
  box-shadow: 0 0 40px 40px #ff6e30 inset, 0 0 0 0 #ff6e30;
  transition: all 150ms ease-in-out;
  border: 2px solid #ff6e30;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #fdf5ff;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #ff6e30 inset, 0 0 10px 4px #ff6e30;
    border: 2px solid #ff6e30;
  }
`;
