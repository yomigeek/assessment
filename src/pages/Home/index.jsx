import React, { useState, useEffect } from 'react';
import moment from 'moment'
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { pagination } from '../../helpers/pagination';
import { getAllPostsApi } from '../../api/posts';

const ListBox = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const LoaderBox = styled.div`
  text-align: center;
`;

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [viewTotal, setViewTotal] = useState(9);
  const [goFetch, setGoFetch] = useState(false);

  const {
    isLoading: getAllPostsLoading,
    error: getAllPostsError,
    refetch: getAllPosts
  } = useQuery('getAllPosts', () => getAllPostsApi(), {
    enabled: false,
    retry: false,
    onSuccess: (data) => setAllPosts(data?.posts, 'ddd')
  });

  setTimeout(() => setGoFetch(true), 3000);

  useEffect(() => {
    if (goFetch) {
      getAllPosts();
      clearTimeout();
    }

    // eslint-disable-next-line
  }, [goFetch]);

  useEffect(() => {
    if (allPosts?.length > 0) {
      const paginatedValues = pagination(allPosts, viewTotal);
      setCurrentPosts(paginatedValues);
    }

    // eslint-disable-next-line
  }, [allPosts]);

  console.log(currentPosts, 'CP');
  return (
    <>
      <Header />
      <Container>
        {getAllPostsError && (
          <Error message='Failed to fetch posts. Refresh Page again' />
        )}
        {getAllPostsLoading || !goFetch ? (
          <LoaderBox>
            <Loader />
          </LoaderBox>
        ) : (
          <ListBox>
            {currentPosts.map((singlePost) => {
              return (
                <Card
                  title={singlePost?.title}
                  name={singlePost?.author?.name}
                  summary={singlePost?.summary}
                  imgSrc={singlePost?.author?.avatar}
                  key={singlePost?.title}
                  pubDate={moment(singlePost?.publishDate).format('L')}
                />
              );
            })}
          </ListBox>
        )}
      </Container>
    </>
  );
};

export default Home;
