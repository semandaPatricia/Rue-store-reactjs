import styled from "styled-components";
import { mobile } from "../responsive";
import PopularCardSlider from "./PopularCardSlider";
import SortingDetails from "./SortingDetails";
import Newsletter from "./Newsletter";


const PopularList = () => {
  return (
    <>
    <SortingDetails/>
    <PopularCardSlider/>
    <Newsletter />
  </>
  );
};

export default PopularList;