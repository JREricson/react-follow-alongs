import useFetch from '../shared_components/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:3002/blogs');

  return (
    <div>
      <h1>Home page</h1>

      {error && <div>{error}</div>}
      {isPending && <div>...loading</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
