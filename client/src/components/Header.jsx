import { Avatar } from "@mui/material";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";

function NavScrollExample() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
     navigate('/')    } catch (error) {
      console.log(error);
    }
  };
  // console.log(currentUser);
  return (
    <Navbar
      style={{ background: "rgb(63, 33, 63)", color: "white" }}
      expand="lg"
      className=""
    >
      <Container
        style={{ display: "flex", justifyContent: "space-around" }}
        fluid
      >
        <Link to="/">
          <img
            style={{ height: "4rem" }}
            src="https://nwplus.tv/assets/logo2.png"
            alt=""
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {currentUser ?(
            <>
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px", color: "white" ,gap:'2rem'}}
            navbarScroll
          >
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
            <Link style={{ color: "white" }} to="/family">
              Family
            </Link>
            <Link style={{ color: "white" }} to="/kids">
              Kids
            </Link>
            <Link style={{ color: "white" }} to="/animations">
              Animations
            </Link>
            <Link style={{ color: "white" }} to="/lifestyle">
              LifeStyle
            </Link>
            <Link style={{ color: "white" }} to="/profile">
              Profile
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search ..." 
             
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            </>
          ):''}
          
          <div style={{display:'flex',marginBottom:'1rem',justifyContent:'space-around',alignItems:'center'}}>
          <div style={{ marginLeft: ".5rem" }}>
          <Link style={{ marginLeft: "1rem" }} to="/profile">
            <div>
              {!currentUser ? (
                <Avatar />
              ) : (
                <>
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                </>
              )}
            </div>
          </Link></div>
          <div style={{marginTop:'1rem' ,marginLeft: ".5rem" }}>
          {currentUser?(
            <Button onClick={handleSignOut}>
              log out
            </Button>
          ):(
            <Link to='/sign-in'>
               <Button>
              login
            </Button>
            </Link>
           
          )}</div></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <div className='bg-slate-200'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 className='font-bold'>Auth App</h1>
//         </Link>
//         <ul className='flex gap-4'>
//           <Link to='/'>
//             <li>Home</li>
//           </Link>
//           <Link to='/about'>
//             <li>About</li>
//           </Link>
//           <Link to='/profile'>
//             {currentUser ? (
//               <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
//             ) : (
//               <li>Sign In</li>
//             )}
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }
