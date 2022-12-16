import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function ItemComponent() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams.get('n'));
  // const [number, setNumber] = useState(1);
  const number = searchParams.get('n');
  return (
    <div>
      An added component
      <Link to={`/items/${number}`}>Item {number} </Link>
      <Outlet context={{ key: 'value' }} />
      {/* <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /> */}
      <input type="number" value={number} onChange={(e) => setSearchParams({ n: e.target.value })} />
    </div>
  );
}
