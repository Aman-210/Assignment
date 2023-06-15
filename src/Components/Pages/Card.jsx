import { styled , Card, CardActions , CardContent , CardMedia , Button , Typography, CircularProgress} from '@mui/material'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useState } from 'react';



// Styling
const StyledCard = styled(Card)(({theme})=>({
    marginLeft:"11vh",
    marginTop:"2vh",
    height:"35vh",
    width:"35vh",
    backgroundColor:'#212529',
    [theme.breakpoints.down('lg')]:{
   
    marginLeft:"14vh"
    
    },
    [theme.breakpoints.down('sm')]:{
     marginLeft:'9vh'
  },
    }));
   
   const Heading = styled(Typography)(({theme})=>({
      fontSize:'20px',
      fontWeight:"bolder",
      display:"flex",
      justifyContent:'center',
      color:"#f5df4e",
      listStyle:"none",
      textDecoration: "none",
  '&:hover': {
    textDecoration: "none",
  },
   }));

   const Progress = styled(CircularProgress)(({theme})=>({
    fontSize:'40px',
    color:"blue",
    marginLeft:"90vh",
    marginTop:"40vh"
   
   }));

   const Bookmark = styled(Rating)(({theme})=>({
    fontSize:"30px",
    
    fontWeight:"bolder",
    marginLeft:"30vh"
   
   }));
   const Media = styled(CardMedia)(({theme})=>({
   width:'20vh',
   height:"22vh",
   marginLeft:'5vh'
   
   }));
   

   

 const Item = ({ pokemon, loading, handleClick })=>{


   
            
            return(
               <>
               {
                  loading ? <Progress/> :
                      pokemon.map((item , index) => {
                         return(
                            <StyledCard  key={index} >
                    <Bookmark   name="customized-1"  max={1}  onClick={()=>handleClick(item)} />  
                   <Link to={`/detail/${item.id}`}  style={{textDecoration:'none'}}>
                <Media
                component="img"
                alt="pokemon"
                height="190"
                image={item.sprites.front_default}
             
                 />
             <CardContent >
             <Heading >
                {item.name}
             </Heading>
             </CardContent>
           
      </Link>
            </StyledCard>
            )
         })
         
      }
            
                </>
            )


         }
      export default Item