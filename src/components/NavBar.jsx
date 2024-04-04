import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to="/"><h3>Home</h3></Link>
      <Link to="/puppy/:id"><h5>Specific Pup</h5></Link>
    </>
  );
};

export default NavBar;