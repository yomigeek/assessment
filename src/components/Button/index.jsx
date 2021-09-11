import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 10px 0;
  margin: 15px;
  width 150px;
  background: #0c3e5d;
  border: none;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

const Button = ({ title, actionHandler }) => {
  return <CustomButton onClick={actionHandler}>{title}</CustomButton>;
};

export default Button;
