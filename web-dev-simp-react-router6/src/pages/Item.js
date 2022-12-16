import { useParams, useOutletContext } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  const context = useOutletContext();

  return (
    <div>
      <h1>item {id}</h1>
      <h2>context from parent {context.key}</h2>
    </div>
  );
};

export default Item;
