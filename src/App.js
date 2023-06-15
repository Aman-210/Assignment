import{BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
// Components
import Page1 from './Components/Pages/ListingPage';
import Header from './Components/Pages/Header';
import Detail from './Components/Pages/Detail';
import Favourite from './Components/Pages/Favourite';
import { useState } from 'react';
import { Typography , styled} from '@mui/material';



const Warning = styled(Typography)(({theme})=>({
  width:'250px',
  height:"48px",
  position:'absolute',
  right:0,
  top:"10%",
  backgroundColor:'#212529',
  color:"#f5df4e",
  fontSize:'1.1rem',
  fontFamily:"cursive",
  padding:"5px",
  borderRadius:"5px",
  
  
  }));


function App() {

  // Logic of favourite Icons 
  const [cart , setCart] = useState([])
  const [warning , setWarning] = useState(false)
  const handleClick = (item)=>{
    const isPresent = cart.some((product) => product.id === item.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
  
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      return updatedCart;
    });
  }
  return (
   <BrowserRouter>
   <Header  size={cart.length}/>
   <Routes>
    <Route path='/' element={<Page1  handleClick={handleClick} />}></Route>
    <Route path='/detail/:id' element={<Detail />}></Route>
    
    
    <Route path='/favourite' element={<Favourite cart={cart} setCart={setCart} />}></Route>
   </Routes>
    {
      warning && <Warning>Pokemon is added to  your favourites</Warning>
    }
   </BrowserRouter>
  );
}

export default App;
