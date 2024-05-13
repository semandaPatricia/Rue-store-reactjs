
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Footer from "../../components/Footer";

import { mobile } from "../../responsive.js";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to next line */
  ${mobile({ padding: "10px", flexDirection:"column",gap: "1rem" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  max-width: 50%; /* Each column takes up maximum half of the container width */
  @media only screen and (max-width: 768px) {
    max-width: 100%; /* On smaller screens, take up full width */
   
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto; /* Allow the height to adjust based on aspect ratio */
  object-fit: cover; /* Ensure the image covers its container */
  
  ${mobile({ height: "40vh" })} /* Adjust height for mobile screens */
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
@media only screen and (max-width: 768px) {
  display: none; /* Hide the description on smaller screens */
}
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 16px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const Product = () => {
  return (
    <Container className="container mx-auto">
 <Wrapper >
    {/* Image Container */}
        <ImgContainer >
          <Image src="https://images.pexels.com/photos/6770814/pexels-photo-6770814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="w-full md:h-auto md:max-h-full object-cover"/>
        </ImgContainer>
         {/* Info Container */}
        <InfoContainer>
          <Title className="text-xl font-semibold mb-2">Denim skirt</Title>
          <Desc className="text-sm  mb-4">
          High-waist skirt with five pockets. Faded effect. Front slit hem and seamless finish. Front zip fly and metal button fastening.
          </Desc>
          <Price  className="">$ 20</Price>
          <FilterContainer>
             {/* Color Filter */}
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            {/* Size Filter */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize  >
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
           {/* Quantity Control */}
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            {/* Add to Cart Button */}
            <Button className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 md:w-auto">ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      <Footer />
    </Container>
  );
};

export default Product;