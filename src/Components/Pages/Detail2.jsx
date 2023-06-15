import {Box , Typography , styled} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';
import { useState } from 'react';




const Section = styled(Box)(({theme})=>({
    marginTop:"5vh",
    background:"black",
    height:'100vh',
    display:"flex",
    gap:"50vh"
}));

const Image = styled('img')(({theme})=>({
   height:"70vh",
   marginTop:"10vh"
}));

const Description = styled(Box)(({theme})=>({
  
  marginTop:"10vh"
}));

const Heading = styled(Typography)(({theme})=>({
  fontSize:"30px",
  color:"#f5df4e",
  fontFamily:"cursive"
}));

const Details = styled(Box)(({theme})=>({
  

  marginLeft:"-20vh",
  marginTop:"8vh",
  display:"flex",
  gap:"20vh"
}));

const Quality = styled(Typography)(({theme})=>({
    fontSize:"20px",
    color:"#f5df4e",
    fontWeight:"bold",
    fontFamily:"cursive"
  }));
  
  const Quantity = styled(Typography)(({theme})=>({
    fontSize:"15px",
    color:"#f5df4e",
    fontFamily:"cursive"
  }))
  const Arrow = styled(ArrowRightAltIcon)(({theme})=>({
    fontSize:"30px",
    color:"#fff",
    
  }))

const Detail2 = ()=>{

      
    

  
    return(
     
     <Section>
       
        
        <Image  alt="" />
        
        <Description>
        <Heading>Details</Heading>
        <Details><Quality>Weight </Quality><Arrow/><Quantity>Kg</Quantity> </Details>
        <Details><Quality>Species </Quality><Arrow/><Quantity></Quantity> </Details>
        <Details><Quality>Moves </Quality><Arrow/><Quantity></Quantity> </Details>
        <Details><Quality>Attacks </Quality><Arrow/><Quantity></Quantity> </Details>
        <Details><Quality>Speed</Quality><Arrow/><Quantity>  </Quantity> </Details>
        <Details><Quality>Defense </Quality><Arrow/><Quantity></Quantity> </Details>
       
        </Description>
    
       
     </Section>
     
    )
}
export default Detail2








