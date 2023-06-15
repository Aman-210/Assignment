import { styled , Card, Box, CardContent , CardMedia , Typography, } from '@mui/material'


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

const Result = ()=>{
return(
  <Section>

  </Section>
)
}
export default Result;

