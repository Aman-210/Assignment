// Import Components from Material UI
import {Box,  styled} from '@mui/material'
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import Item from './Card';


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
}))
// End of Styling 
  
    
   const Page1 = ({handleClick})=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url + "?limit=500");
        
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id)
              return state;
             
          })
       })   
    }
    useEffect(()=>{
      pokeFun();
  },[url])

    return(
        <>
         <Section>
         <Item pokemon={pokeData} loading={loading}  handleClick={handleClick}/>
              
         </Section>
        
         
        </>
    )
}
export default Page1