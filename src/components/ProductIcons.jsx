import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "styled-components";



const Info = styled.div`
  opacity: 0;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
 
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;



const Image = styled.img`
  height: 85%;
  width:70%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductIcons = ({ item }) => {
  

  return (
    <>
    
    <Container className='flex flex-col'>
      
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
       
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    
  

    </Container>
    
    </>
    
  );
};

export default ProductIcons;