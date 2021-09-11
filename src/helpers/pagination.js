export const pagination = (allPosts, viewTotal) => {
  let paginatedPosts = [];
  for (let i = 0; i < viewTotal; i++) {
    paginatedPosts.push(allPosts[i]);
  }

  return paginatedPosts;
};
