import { Link } from 'react-router-dom';

export function Items() {
  return (
    <>
      <h1>Items</h1>
      <Link to="/items/1">Item 1</Link>
      <Link to="/items/2">Item 2</Link>
    </>
  );
}
