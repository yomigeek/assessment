import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.header`
  height: 70px;
  width: 100%;
  background: #0c3e5d;
  text-align: center;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Link to='/'>
        <img
          src='https://res.cloudinary.com/kugoo/image/upload/v1631362985/webimages/icon1.jpg'
          alt='logo'
          height='70px'
          width='100px'
        />
      </Link>
    </HeaderBox>
  );
};

export default Header;
