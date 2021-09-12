import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { getSinglePostsApi } from '../../api/posts';
import Button from '../../components/Button';
import Tags, { TagContainer } from '../../components/Tags';

const LoaderBox = styled.div`
  text-align: center;
`;

const CenterBox = styled.div`
  text-align: center;
  padding: 30px;
`;

const DetailBox = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const SectionOne = styled.div`
  width: 30%;
  border: 1px solid #e4ebf1;
  padding: 20px;
  margin-right: 2%;
  margin-left: 5%;
  margin-bottom: 20px;
  background: #fdf4ee;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const SectionTwo = styled.div`
  width: 50%;
  border: 1px solid #e4ebf1;
  padding: 20px;
  margin-bottom: 20px;
  @media (max-width: 1023px) {
    width: 100%;
  }
  font-size: 14px;
`;

const AvatarBox = styled.div`
  text-align: center;
  border-radius: 50px;
`;

const Avatar = styled.img`
  border-radius: 50px;
  border: 1px solid #f4cac0;
  height: 60px;
`;

const NameBox = styled.div`
  position: relative;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #0d405f;
  text-align: center;
`;

const ArticleTitle = styled.div`
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
`;

const NotFoundBox = styled.div`
  padding: 50px;
  text-align: center;
`;

const DateBox = styled.div`
  font-weight: 400;
  font-size: 12px;
  margin-top: 10px;
`;

const Detail = ({ match }) => {
  const [goFetch, setGoFetch] = useState(false);
  const [singlePost, setSinglePost] = useState(null);

  const history = useHistory();

  // Triggers the lifecycle that calls the API mock after 1 seconds
  setTimeout(() => setGoFetch(true), 1000);

  // Get Post id
  const postId = match?.params?.id;

  // Mock API Call to fecth single post using react query
  const { isLoading: getSinglePostLoading, refetch: getSinglePost } = useQuery(
    'getSinglePost',
    () => getSinglePostsApi(postId),
    {
      enabled: false,
      retry: false,
      onSuccess: (data) => setSinglePost(data)
    }
  );

  // Lifecycle that is triggerd after 1seconds timeout
  useEffect(() => {
    if (goFetch) {
      getSinglePost();
      clearTimeout();
    }

    // eslint-disable-next-line
  }, [goFetch]);

  return (
    <>
      <Header />
      <Container>
        {!getSinglePostLoading && !goFetch ? (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        ) : singlePost?.length > 0 && goFetch ? (
          <DetailBox>
            <SectionOne>
              <AvatarBox>
                <Avatar src={singlePost[0]?.author?.avatar} />
              </AvatarBox>
              <NameBox>
                {' '}
                Author: {singlePost[0]?.author?.name}
                <br />{' '}
                <DateBox>
                  Publish Date:{moment(singlePost[0]?.publishDate).format('L')}
                </DateBox>
              </NameBox>
              <ArticleTitle>
                Title: <br />
                {singlePost[0]?.title}
              </ArticleTitle>
            </SectionOne>
            <SectionTwo>
              {singlePost[0]?.summary}
              <br />
              <TagContainer>
                {singlePost[0]?.categories?.map((tag, index) => {
                  return <Tags title={tag?.name} key={index} />;
                })}
              </TagContainer>
            </SectionTwo>
          </DetailBox>
        ) : (
          singlePost && (
            <NotFoundBox>The post you're looking for doesn't exist</NotFoundBox>
          )
        )}
        {!getSinglePostLoading && goFetch && (
          <CenterBox>
            <Button title='Back Home' actionHandler={() => history.push('/')} />
          </CenterBox>
        )}
      </Container>
    </>
  );
};

export default Detail;
