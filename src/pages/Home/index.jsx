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
import { getQueryParams } from '../../helpers/getQueryParams';
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
  padding: 30px;
`;

const ClearFilter = styled.span`
  color: #f26351;
  cursor: pointer;
  font-size: 14px;

  :hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [viewTotal, setViewTotal] = useState(6);
  const [goFetch, setGoFetch] = useState(false);
  const [filterResults, setFilterResults] = useState(null);
  const [filterString, setFilterString] = useState(null);

  // Triggers the lifecycle that calls the API mock after 3 seconds
  setTimeout(() => setGoFetch(true), 2000);

  // Mock API Call to fecth all posts using react query
  const {
    isLoading: getAllPostsLoading,
    error: getAllPostsError,
    refetch: getAllPosts
  } = useQuery('getAllPosts', () => getAllPostsApi(), {
    enabled: false,
    retry: false,
    onSuccess: (data) => setAllPosts(data?.posts)
  });

  // Lifecycle that is triggerd after 3seconds timeout
  useEffect(() => {
    if (goFetch) {
      getAllPosts();
      clearTimeout();
    }

    // eslint-disable-next-line
  }, [goFetch]);

  // Handles pagination processing using the pagination helper function
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

  // A function that checks the query string of the url on page mounts
  useEffect(() => {
    checkQueryString();
  }, []);

  // Handles the filter processing using the filter processor
  // based on the availability of a query string
  useEffect(() => {
    if (filterString) {
      const response = filterProcessor(allPosts, filterString?.toLowerCase());

      setViewTotal(6);
      setFilterResults(response);
    }
  }, [allPosts, filterString]);

  // This controls the total number of displayed posts to the user on click load
  // more button
  const loadMoreHandler = () => {
    if (viewTotal < allPosts?.length) {
      setViewTotal(viewTotal + 6);
    }
  };

  // This handles the change of the filter category and
  // handles the filtering process
  const categoryFilterHandler = (e) => {
    const filterVariable = e.target.value;

    if (filterVariable !== 'select') {
      const response = filterProcessor(allPosts, filterVariable?.toLowerCase());
      setViewTotal(6);
      setFilterResults(response);
    }
  };

  // This clears the filter result
  const clearFilterHandler = () => {
    setViewTotal(6);
    setFilterResults(null);
  };

  // This confirms the filter string value and starts the
  //filter by query string process
  const checkQueryString = () => {
    const value = getQueryParams();

    if (Object.keys(value)?.length > 0) {
      setFilterString(value?.category);
    }
  };

  // Handles the display of the load more button based on certain conditions
  const showLoadMoreButton = () => {
    if (!getAllPostsLoading && goFetch && currentPosts?.length > 0) return true;

    if (filterResults?.length > 0) return true;
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
            value={filterString}
          />
        )}
        {getAllPostsError && (
          <Error message='Failed to fetch posts. Refresh Page again' />
        )}
        {filterResults?.length < 1 && allPosts?.length > 0 && (
          <CenterBox>
            <div>No Result for Category: {filterString}</div>
            <br />
            <ClearFilter onClick={clearFilterHandler}>
              Clear Filter [x]
            </ClearFilter>
          </CenterBox>
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
                  postId={singlePost?.id}
                />
              );
            })}
          </ListBox>
        )}

        {showLoadMoreButton() && (
          <CenterBox>
            <Button title='Load More' actionHandler={loadMoreHandler} />
          </CenterBox>
        )}
      </Container>
    </>
  );
};

export default Home;
