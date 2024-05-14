import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import { mobile } from "../../responsive";
import SortingDetails from '../../components/SortingDetails';
import { menProducts } from "../../data";
import ProductIcons  from "../../components/ProductIcons";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Men = () => {
  
  return (
    <>
    
    <SortingDetails/>
    <h1 className="flex justify-center mt-3">Trending Products </h1>
    <Container>
    
      {menProducts.map((item) => (
           <ProductIcons  item={item} key={item.id} />
         
         
      ))}
    
     
   
    </Container>
    
    
    <Newsletter />
    </>
  )
}

export default Men