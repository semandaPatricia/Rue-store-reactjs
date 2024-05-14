import React from 'react'
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import { mobile } from "../../responsive";
import SortingDetails from '../../components/SortingDetails';
import { womenProducts } from "../../data";
import Product from "../../components/ProductIcons";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Women = () => {
  
  return (
    <>
   
    <SortingDetails/>
    <h1 className="flex justify-center mt-3">Trending Products </h1>
    <Container>
      {womenProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    
    <Newsletter />
   </>
  )
}

export default Women