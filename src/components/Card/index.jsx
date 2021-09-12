import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Tags, { TagContainer } from '../Tags';

const CardBox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  max-height: fit-content;
  width: 340px;
  background: #fdf4ee;
  margin: 0px 20px 50px 20px;
  @media (max-width: 1023px) {
    width: 100%;
  }
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`;

const UserInfo = styled.div`
  display: flex;
  padding: 5px;
  background: #fff;
`;

const UserImg = styled.img`
  border-radius: 50px;
  height: 40px;
  width: 40px;
`;

const UserImgBox = styled.div`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  border: 3.5px solid #fdf4ee;
`;

const NameBox = styled.div`
  position: relative;
  margin-top: 5px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #0d405f;
`;

const DateBox = styled.div`
  font-weight: 400;
  font-size: 11px;
`;

const ArticleInfoBox = styled.section`
  margin-top: 12px;
  padding: 10px;
  font-size: 12px;
  color: #0d405f;
`;

const ArticleTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Card = ({
  title = '',
  name = '',
  imgSrc = '',
  summary = '',
  tagList = [],
  pubDate,
  postId
}) => {
  const history = useHistory();
  const goToDetail = () => history.push(`/post/${postId}`);

  return (
    <CardBox onClick={goToDetail}>
      <UserInfo>
        <UserImgBox>
          <UserImg src={imgSrc} />
        </UserImgBox>
        <NameBox>
          {name}
          <DateBox>Date: {pubDate}</DateBox>
        </NameBox>
      </UserInfo>
      <ArticleInfoBox>
        <ArticleTitle>{title}</ArticleTitle>
        <section>
          <b>Summary:</b> {summary}
        </section>
        <TagContainer>
          {tagList?.map((tag, index) => {
            return <Tags title={tag?.name} key={index} />;
          })}
        </TagContainer>
      </ArticleInfoBox>
    </CardBox>
  );
};

export default Card;
