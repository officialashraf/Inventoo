import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import "./search.css"
import MetaData from './MetaData';



const Searchbar = () => {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) =>{
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/products/${keyword}`);
    }else {
      navigate("/products");
    }
    console.log(keyword)
  };
  return (
    <>
    <MetaData title="Search A Product"/>
    <div>
   
       <form className='searchBox' onSubmit={searchSubmitHandler}>
        <input type='text' placeholder='Search a Product...' onChange={(e)=> setKeyword(e.target.value)}/>
       <input type='submit' value='search' />
       </form>
       
    </div>
    </>
  )
}

export default Searchbar;