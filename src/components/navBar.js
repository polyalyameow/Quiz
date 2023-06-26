import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const userLoggedIn = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove the user item from localStorage to log out the user
    navigate('/Login'); // Redirect to the login page after logout
  };

  return (
    <section className='navBar'>
      <h1 className="nav-heading">Quiz Game</h1>
      <nav className="navigation">
      </nav>
    </section>
  );
};

export default NavBar;
