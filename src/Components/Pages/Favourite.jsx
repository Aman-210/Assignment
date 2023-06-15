import { styled , Card, Box, CardContent , CardMedia , Typography, } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';




// Styling


const Section = styled(Box)(({theme})=>({
    background:'#f2f2f2',
    
    marginTop:'8vh',
    color:'#fff',
    
    display:"flex",
    flexWrap:"wrap",
    [theme.breakpoints.down('sm')]:{
     
    },
   [theme.breakpoints.down('lg')]:{
    
   display:"block"
     },
 }));

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


   const Media = styled(CardMedia)(({theme})=>({
   width:'20vh',
   height:"22vh",
   marginLeft:'5vh'
   
   }));

   const Delete = styled(ClearIcon)(({theme})=>({
    marginLeft:'30vh',
    fontSize:"30px",
    cursor:"pointer"
    
  }))


const Favourite = ({cart , setCart})=>{
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        
    }
  
  
    return(

        
        <>
       
          <Section>       
           
          {cart?.map((item) => {
  return (
    <StyledCard key={item.id}>
        <Delete onClick={()=>handleRemove(item.id)}/>
      <Media component="img" alt="pokemon" height="190" image={item.sprites?.front_default} />
      <CardContent>
        <Heading>{item.name}</Heading>
      </CardContent>
    </StyledCard>
       );
        })}
  
           

            </Section> 
         </> 
        ) 
    } 
    export default Favourite


       
        
  

     