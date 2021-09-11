import queryString from 'query-string';

export const getQueryParams = () => {
  const value = queryString.parse(window.location.search);
  const params = value;

  return params;
};
