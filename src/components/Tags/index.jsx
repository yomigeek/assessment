import styled from 'styled-components';

const TagBox = styled.div`
  width: fit-content;
  border: 2px solid #0c3e5d;
  height: fit-content;
  padding: 3px 10px;
  color: #fff;
  background: #0c3e5d;
  border-radius: 50px;
  margin-top: 10px;
  margin-right: 10px
`;

const Tags = ({ title }) => {
  return <TagBox>{title}</TagBox>;
};

export default Tags;
