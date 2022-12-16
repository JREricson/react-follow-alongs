import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../shared_components/useFetch';


const BlogItem = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:3002/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3002/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
  
}
 
export default BlogItem;