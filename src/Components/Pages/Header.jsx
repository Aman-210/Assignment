// Import Material UI Component
import { AppBar, styled, Toolbar, Typography , Box  , InputBase, Button,} from "@mui/material"

//  Import Material Icons
import SearchIcon from '@mui/icons-material/Search';
// import react componets
import { Link, } from "react-router-dom";


// Styling
const NavBar = styled(AppBar)(({theme})=>({
    backgroundColor:'#212529'
}))

const Item = styled(Box)(({theme})=>({
   display:'flex',

}));

const Logo = styled(Typography)(({theme})=>({
    color:"#f5df4e",
    fontSize:'30px',
    fontWeight:"bold",
    fontFamily:'cursive',
   

    [theme.breakpoints.down('sm')]:{
      fontSize:"15px",
      marginTop:"1vh",
      marginLeft:'0vh'
    },
 
}));

const Search = styled(Box)(({theme})=>({
    width:'70vh',
    height:'6vh',
    background:'#616161',
    marginLeft:'40vh',
    display:'flex',
    [theme.breakpoints.down('lg')]:{
      marginLeft:"6vh",
      width:'30vh',
      height:"4vh"
      
      },
    [theme.breakpoints.down('sm')]:{
      marginLeft:"2vh",
      width:'28vh',
      height:"4vh",
      marginTop:"1vh"
        },
}));

const StyledInputBase = styled(InputBase)(({theme})=>({
    fontSize:"20px",
    marginLeft:"2vh",
   

}))
const Number = styled('span')(({theme})=>({
   color:"#212529",
   backgroundColor:'#f5df4e',
   borderRadius:'5vh',
   height:"24px",
   fontSize:"20px",
   width:"20px",

}))
const StyleIcon = styled(SearchIcon)(({theme})=>({
    marginLeft:"1vh" , 
    fontSize:'35px' , 
    marginTop:'.5vh',
    [theme.breakpoints.down('lg')]:{
     
    
      
      },
    [theme.breakpoints.down('sm')]:{
      marginLeft:"0vh",
      fontSize:"20px"
        },

}))
const StyledButton = styled(Button)(({theme})=>({
    fontSize:"15px",
    marginLeft:'20vh',
    border:"2px solid #616161",
    color:"#f5df4e",
    width:'5vh',
    height:'6vh',
    background:'#212529',
    ":hover":{
        background:'rgb(0,0,0,0.5)'
    },
    [theme.breakpoints.down('lg')]:{
     width:"5vh",
     height:"4vh"
  
      },
    [theme.breakpoints.down('sm')]:{
        width:"5vh",
        height:"4vh",
        marginLeft:'5vh',
    },

}))
const Favourite = styled(Typography)(({theme})=>({
    fontSize:"25px",
    marginLeft:"30vh",
    marginTop:"1vh",
    color:"#f5df4e",
    cursor:"pointer",
    [theme.breakpoints.down('lg')]:{
      marginTop:"0.5vh",
      marginLeft:"3vh"
      
      },
    [theme.breakpoints.down('sm')]:{
        marginLeft:"1vh",
        fontSize:"15px",
        marginTop:'1vh'
    },

}))



const Header = ({size})=>{
  
   

    return(
        <NavBar>
            <Toolbar>
           <Item>
           <Link to='/' style={{textDecoration:'none'}}> <Logo>Pokemon.io</Logo></Link>
            <Search >
           <StyleIcon />
           <StyledInputBase 
            placeholder="Search..."
           
          />
          <Link to='/find'>
          <StyledButton>
                Find
            </StyledButton>
            </Link>
            </Search>
           <Box>
            
           <Link to='/favourite'   style={{textDecoration:'none'}}><Favourite>Bookmarks</Favourite></Link>
           </Box>
            <Number  >{size}</Number>
           </Item>
            </Toolbar>
        </NavBar>
    )
}
export default Header