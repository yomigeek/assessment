import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  background: #fff;
`;

const Cover = styled.div`
  padding: 20px 30px;
`;

const Container = ({ children }) => {
  return (
    <Cover>
      <Box>{children}</Box>
    </Cover>
  );
};

export default Container;
