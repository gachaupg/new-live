import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Pricing() {
  return (
    <>
    <h1 style={{fontSize:'1.5rem', textAlign:'center',fontWeight:'600',color:''}}> Choose your subscription plan</h1>
 
   <div className="pricing">
    
     <MDBCard className='card-price'>
      <MDBCardBody style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
        <MDBCardTitle style={{fontSize:'1.5rem',fontWeight:'600',color:'purple'}}>Pay as you go</MDBCardTitle>
        <MDBCardText>
        Unlimited access for 24 hours
        </MDBCardText>
        <MDBBtn style={{background:'black'}}>ksh 300</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card-price'>
      <MDBCardBody style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
        <MDBCardTitle style={{fontSize:'1.5rem',fontWeight:'600',color:'purple'}}>Weekly</MDBCardTitle>
        <MDBCardText>
        Unlimited access for a week         </MDBCardText>
        <MDBBtn style={{background:'black'}}>ksh 740</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard className='card-price'>
      <MDBCardBody style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
        <MDBCardTitle style={{fontSize:'1.5rem',fontWeight:'600',color:'purple'}}>Monthly</MDBCardTitle>
        <MDBCardText>
        Unlimited access for a Month          </MDBCardText>
        <MDBBtn style={{background:'black'}}>ksh 1100</MDBBtn>
      </MDBCardBody>
    </MDBCard>
   </div>
   </>
  );
}