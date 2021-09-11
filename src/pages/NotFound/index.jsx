import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

const TextBox = styled.div`
  padding: 30px;
  font-size: 20px;
  text-align: center;
  color: #f26351;
`;

const BackTo = styled.a`
  text-decoration: none;
  color: #0c3e5d;
  font-size: 15px;
  display: inline-block;
  margin-top: 30px;
  :hover {
    color: #f26351;
  }
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <TextBox>
          <img
            src='https://res.cloudinary.com/kugoo/image/upload/v1631376228/webimages/404-review.png'
            alt='404-icon'
            height='150px'
          />
          <br />
          Oops! Page Not Found
          <br />
          <BackTo href='/'>Go home</BackTo>
        </TextBox>
      </Container>
    </>
  );
};

export default NotFound;
