import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 70px;
  width: 100%;
  background: #0c3e5d;
  text-align: center;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderBox>
      <img
        src='https://res.cloudinary.com/kugoo/image/upload/v1631362985/webimages/icon1.jpg'
        alt='logo'
        height='70px'
        width='100px'
      />
    </HeaderBox>
  );
};

export default Header;
