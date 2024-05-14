import React from 'react'
import styled from "styled-components";
import Newsletter from "../../components/Newsletter";
import { mobile } from "../../responsive";
import SortingDetails from '../../components/SortingDetails';
import { kidsProducts } from "../../data";
import ProductIcons  from "../../components/ProductIcons";
import Card from '../../components/Card/Card';
import CardDesign from '../../components/CardDesign/CardDesign';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Kids = () => {
  
  return (
    <>
  
    <SortingDetails/>
    <Card/>
    <h1 className="flex justify-center mt-3">Trending Products </h1>
    
    <Container>
      {kidsProducts.map((item) => (
        <ProductIcons  item={item} key={item.id} />
      ))}
    </Container>
    
    <Newsletter />
   </>
  )
}

export default Kids