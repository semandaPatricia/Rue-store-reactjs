
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  //background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ padding: "5px", flexDirection:"column" })}
`;
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 15px;
  padding:5px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" ,padding: "6px"})}

`;

const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "50%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color:teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Subscribe to the newsletter and get 10% off your next shop, access to special offers and much more!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;