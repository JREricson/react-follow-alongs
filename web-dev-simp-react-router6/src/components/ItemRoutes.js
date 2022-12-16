import { Routes, Route } from 'react-router-dom';
import Item from '../pages/Item';
import { Items } from '../pages/Items';

export function ItemRoutes() {
  return (
    <Routes>
      <Route index element={<Items />} />
      <Route path=":id" element={<Item />} />
    </Routes>
  );
}
