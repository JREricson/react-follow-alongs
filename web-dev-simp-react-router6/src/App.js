import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Navbar from './components/Navbar';
import { Items } from './pages/Items';
import {ItemComponent} from './components/ItemComponent'

// import { ItemRoutes } from './components/ItemRoutes';
import { NotFound } from './pages/NotFound';
import Item from './pages/Item';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* hard coding location like this will make the item visible on ALL pages*/}
        {/* <Routes location="/items">  */}
        <Route path="/items" element={<h2>more content only for books page</h2>} />
      </Routes>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<ItemComponent />}>
          <Route index element={<Items />} />
          <Route path=":id" element={<Item />} />
        </Route>

        {/* <Route path="/items/*" element={<ItemRoutes />} /> */}

        {/* <Route path="/items" element={<Items />} />
        <Route path="items/:id" element={<Item />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
