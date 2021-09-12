export const getAllPostsApi = async () => {
  const request = await fetch('/api/posts');
  const response = await request.json();
  return response;
};

export const getSinglePostsApi = async (id) => {
  const request = await fetch(`/api/posts/${id}`);
  const response = await request.json();
  return response;
};
