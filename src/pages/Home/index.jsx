import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Filter from '../../components/Filter';
import { options } from '../../components/Filter/data';

import { pagination } from '../../helpers/pagination';
import { filterProcessor } from '../../helpers/filterProcessor';
import { getAllPostsApi } from '../../api/posts';
import Button from '../../components/Button';

const ListBox = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const LoaderBox = styled.div`
  text-align: center;
`;

const CenterBox = styled.div`
  text-align: center;
`;

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [viewTotal, setViewTotal] = useState(6);
  const [goFetch, setGoFetch] = useState(false);
  const [filterResults, setFilterResults] = useState(null);

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
      const paginatedValues = pagination(
        filterResults ? filterResults : allPosts,
        viewTotal
      );
      setCurrentPosts(paginatedValues);
    }

    // eslint-disable-next-line
  }, [allPosts, viewTotal, filterResults]);

  const loadMoreHandler = () => {
    if (viewTotal < allPosts?.length) {
      setViewTotal(viewTotal + 6);
    }
  };

  const categoryFilterHandler = (e) => {
    const filterVariable = e.target.value;

    if (filterVariable !== 'select') {
      const response = filterProcessor(allPosts, filterVariable?.toLowerCase());
      setViewTotal(6);
      setFilterResults(response);
    }
  };

  const clearFilterHandler = () => {
    setViewTotal(6);
    setFilterResults(null);
  };

  return (
    <>
      <Header />
      <Container>
        {goFetch && (
          <Filter
            title='Filter By Category:'
            options={options}
            onChangeHandler={categoryFilterHandler}
            filterTotal={filterResults?.length}
            clearFilterHandler={clearFilterHandler}
          />
        )}
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
                  tagList={singlePost?.categories}
                  pubDate={moment(singlePost?.publishDate).format('L')}
                />
              );
            })}
          </ListBox>
        )}
        {!getAllPostsLoading && goFetch && (
          <CenterBox>
            <Button title='Load More' actionHandler={loadMoreHandler} />
          </CenterBox>
        )}
      </Container>
    </>
  );
};

export default Home;
