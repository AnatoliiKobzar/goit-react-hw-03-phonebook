import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const LabelInfo = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`;
