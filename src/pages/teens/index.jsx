import React from 'react'
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import { mobile } from "../../responsive";
import SortingDetails from '../../components/SortingDetails';
import { teensProducts } from "../../data";
import ProductIcons  from "../../components/ProductIcons";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Teens = () => {
  
  return (
    <>
    
    <SortingDetails/>
    <h1 className="flex justify-center mt-3">Trending Products </h1>
    <Container>
      {teensProducts.map((item) => (
        <ProductIcons  item={item} key={item.id} />
      ))}
    </Container>
    
    <Newsletter />
   </>
  )
}

export default Teens