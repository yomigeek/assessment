import React from 'react';
import styled from 'styled-components';

const ErrorBox = styled.div`
  padding: 20px;
  background: #f4cac0;
  color: #f26351;
  border: 2px solid #f4cac0;
`;

const Error = ({ message }) => {
  return <ErrorBox>{message}</ErrorBox>;
};

export default Error;
