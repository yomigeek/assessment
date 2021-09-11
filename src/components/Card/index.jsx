import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags';

const CardBox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  height: fit-content;
  width: 350px;
  background: #fdf4ee;
  margin: 0px 30px 50px 10px;
  @media (max-width: 1023px) {
    width: 100%;
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

const ArticleInfoBox = styled.div`
  margin-top: 12px;
  padding: 10px;
  font-size: 12px;
  color: #0d405f;
`;

const ArticleTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

const Card = ({ title, name, imgSrc, summary, tagList, pubDate }) => {
  return (
    <CardBox>
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
        <div>
          <b>Summary:</b> {summary}
        </div>
        <TagContainer>
          <Tags title='Digital ' />
          <Tags title=' Martketing' />
          <Tags title='Digital Martketing' />

        </TagContainer>
      </ArticleInfoBox>
    </CardBox>
  );
};

export default Card;
