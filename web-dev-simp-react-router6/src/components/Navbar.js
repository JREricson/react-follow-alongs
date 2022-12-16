import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          return isActive? { color: 'red' }:{};

        }}
        to="/"
      >
        Home
        {/* note, text can be changed here with isActive and js as well */}
      </NavLink>
      {/*classname, style, children properties*/}
      <h1>Nav</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link state={'some text passed through state in link state'} to="/">
          Home with state
        </Link>
      </li>
      <li>
        <Link replace to="/">
          Home-replace : goes to page before prev page in browser history, when hit back btn
        </Link>
      </li>
      <li>
        <Link reloadDocument to="/">
          Home-reloadDocument : reloads document instead of just the component
        </Link>
      </li>
      <li>
        <Link to="/about">About Page</Link>
      </li>
      <li>
        <Link to="/items">Items</Link>
      </li>
    </nav>
  );
};

export default Navbar;
