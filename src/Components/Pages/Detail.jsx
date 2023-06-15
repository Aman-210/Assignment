import {Box , Typography , styled} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Section = styled(Box)(({theme})=>({
    marginTop:"5vh",
    background:"black",
    height:'100vh',
   
    display:"flex",
    gap:"50vh",

    [theme.breakpoints.down('sm')]:{
     height:'120vh',
     display:'block'
    },
    [theme.breakpoints.down('lg')]:{
     height:'120vh',
     display:'block'
    }
}));

const Image = styled('img')(({theme})=>({
   height:"50vh",
   marginTop:"20vh",
   objectFit:'cover',
   imageRendering:'auto',
   [theme.breakpoints.down('sm')]:{
   marginTop:"8vh",
   
   height:'25vh',
   width:"44vh"
   },
   [theme.breakpoints.down('lg')]:{
   marginTop:"8vh",
   marginLeft:"10vh",
   height:'25vh',
   width:"50vh"
   },
}));

const Description = styled(Box)(({theme})=>({
  
  marginTop:"10vh",
  [theme.breakpoints.down('sm')]:{
    marginTop:"5vh",
    
    },
  [theme.breakpoints.down('lg')]:{
    marginTop:"7vh",
    
    },
}));

const Heading = styled(Typography)(({theme})=>({
  fontSize:"30px",
  color:"#f5df4e",
  fontFamily:"cursive",
  [theme.breakpoints.down('sm')]:{
    display:'flex',
    justifyContent:'center'
    },
  [theme.breakpoints.down('lg')]:{
   
    display:'flex',
    justifyContent:'center'
    
    },

}));

const Details = styled(Box)(({theme})=>({
  

  marginLeft:"-20vh",
  marginTop:"8vh",
  display:"flex",
  gap:"20vh",
  [theme.breakpoints.down('lg')]:{
    marginLeft:"0vh",
    gap:"24vh"
    },
  [theme.breakpoints.down('sm')]:{
    marginLeft:"0vh",
    gap:"12vh"
    },

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

const Detail = ()=>{
  const { id } = useParams();

  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
      const fetchItemDetails = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          setItemDetails(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchItemDetails();
    }, [id]);

  
    return(
     
     <Section>
       
        
        <Image src={itemDetails?.sprites.front_default}  alt="" />
        
        <Description>
        <Heading>Details</Heading>
        <Details><Quality>Weight </Quality><Arrow/><Quantity>{itemDetails?.weight}Kg</Quantity> </Details>
        <Details><Quality>Species </Quality><Arrow/><Quantity>{itemDetails?.species?.name}</Quantity> </Details>
        <Details><Quality>Moves </Quality><Arrow/><Quantity>{itemDetails?.moves?.length}</Quantity> </Details>
        <Details><Quality>Attacks </Quality><Arrow/><Quantity>{itemDetails?.stats?.find((stat) => stat.stat.name === "special-attack")  ?.base_stat}</Quantity> </Details>
        <Details><Quality>Speed</Quality><Arrow/><Quantity>  {itemDetails?.stats?.find((stat) => stat.stat.name === "speed")?.base_stat}</Quantity> </Details>
        <Details><Quality>Defense </Quality><Arrow/><Quantity>{itemDetails?.stats?.find((stat) => stat.stat.name === "defense")?.base_stat}</Quantity></Details>
       
        </Description>
    
       
     </Section>
     
    )
}
export default Detail