import { PlayArrow } from '@mui/icons-material';
import React from 'react';
import { Button } from 'react-bootstrap';
import VideoPlayerCard from './Categories/Movies';
import AudioPlayer from './Categories/Podicats';
import Shows from './Categories/Shows';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (

    <>
    {!currentUser ?(
      <>
      <div className="home-top">
      <h1 style={{fontSize:'1.5rem'}}>Free Viewing for the First Three Selected Titles</h1>
<h2>To enjoy more of our offering, sign up for a weekly, monthly or even 24 hour access package</h2>
   <Link to='/sign-in'>
    <Button>Sign up</Button>
    </Link>   
      <div className='home-top-cards'>
      <MDBCard>
      <MDBCardImage src='https://nwplus.tv/assets/fam.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle></MDBCardTitle>
        <MDBBtn style={{width:'100%',background:'purple'}} href='#'>Family</MDBBtn>

      </MDBCardBody>
    </MDBCard> <MDBCard>
      <MDBCardImage src='https://nwplus.tv/assets/lifestyle.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle></MDBCardTitle>
        <MDBBtn style={{width:'100%',background:'purple'}} href='#'>Life Style</MDBBtn>

      </MDBCardBody>
    </MDBCard> <MDBCard>
      <MDBCardImage src='https://nwplus.tv/assets/podcast.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle></MDBCardTitle>
        
        <MDBBtn style={{width:'100%',background:'purple'}} href='#'>Podicast</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardImage src='https://nwplus.tv/assets/kids.png' position='top' alt='...' />
      <MDBCardBody>
       
        <MDBBtn style={{width:'100%',background:'purple'}} href='#'>Kids</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </div>
      </div>
      
      </>
    ):(
 <div className='home'>
   
 <div className='home-main' >
<div className="home-left">
<h1 style={{fontSize:'1.5rem'}}>Protect the Environment</h1>
<p>Protecting the environment is not a whim, but rather a necessity. It is a set of actions that we all must carry out in order to avoid the destruction of our planet, even if, in recent years, we seem to be destroying it instead. Through joint collaboration, we can build magnificent futures, but to do so, everyone must contribute to help our environment.</p>
<div className="home-btns">
 <Button style={{background:'purple'}}>Play <PlayArrow/></Button>
<Link to='/pricing'>
<Button style={{background:'purple'}}>View Plans</Button>
 </Link> 
</div>
</div>
<div className="home-right">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOBRtOYF1Av3PpcQ6C0B-WQWtpm4GF9L4hQ&usqp=CAU" alt="" />
</div>
 </div> 
 <VideoPlayerCard/>
 <h2>Podicast</h2>
 <AudioPlayer/>
 <Shows/>
 </div>
    )}
   </>
  );
}
