import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg mb-4"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <div className="navbar-brand">Day 7</div>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
export default Navbar;
