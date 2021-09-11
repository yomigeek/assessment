// export const getPosts = () => {
//   fetch('/api/posts')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log('Error fetching data', error));
// };

export const getAllPostsApi = async () => {
  const request = await fetch('/api/posts');
  const response = await request.json();
  return response;
};
