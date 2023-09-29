import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function PrNav() {
  return (
    <Nav style={{display:'flex' ,justifyItems:'space-around',gap:'3rem'}} variant="underline" >
        <Nav.Item >
        <Link style={{color:'yellow'}} to="/profile">Accounts</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{color:'yellow'}} to="/profile/movies">Movies</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{color:'yellow'}} to="/profile/shows">Shows</Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{color:'yellow'}} to="/profile/podicast" >
          Podicast
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link style={{color:'yellow'}} to="/profile/new-content" >
          Post a new Content
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default PrNav;