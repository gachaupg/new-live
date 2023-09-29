import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import UserMovies from './pages/user/UserMovies';
import UserShows from './pages/user/UserShows';
import UserPodicast from './pages/user/UserPodicast';
import NewContent from './pages/user/NewContent';
export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <ToastContainer/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} >
          <Route path='movies' element={<UserMovies/>}/>
          <Route path='shows' element={<UserShows/>}/>
          <Route path='podicast' element={<UserPodicast/>}/>
          <Route path='new-content' element={<NewContent/>}/>

          </Route>

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
