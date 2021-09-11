export const pagination = (allPosts, viewTotal) => {
  let paginatedPosts = [];
  for (let i = 0; i < viewTotal; i++) {
    if (allPosts[i]) {
      paginatedPosts.push(allPosts[i]);
    }
  }

  return paginatedPosts;
};
