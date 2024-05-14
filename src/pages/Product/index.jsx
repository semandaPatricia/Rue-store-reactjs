import React from "react";
import { useState } from "react";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
//import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  //const dispatch = useDispatch();
  //const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const productDetailItem = {
    images: [
      {
        img:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        img:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        img:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        img:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        img:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: " Half Hoodie ",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Tshirt",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599,
    description:
      "Relaxed fit sleeveless hoodie with an adjustable hood. Featuring welt hip pockets, ribbed trims and a printed logo.",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["yellow", "white", "red"],
  };

  return (
    <div className="product ">
      
        <>
          <div className="left">
            <div className="images">
              <img
                src="https://images.pexels.com/photos/9775769/pexels-photo-9775769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=" BLACK GUY"
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src="https://images.pexels.com/photos/9775850/pexels-photo-9775850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=" group of guys"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src="https://images.pexels.com/photos/9775876/pexels-photo-9775876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1> {productDetailItem.title}</h1>
            {/* caterogies  */}
            <p className="font-bold">
          Category:{" "}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        {/* price  */}
            <span className="price">${productDetailItem.price}</span>
             {/* description  */}
            <p>{productDetailItem.description}</p>
                       {/* sizes  */}
             <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {productDetailItem.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div>
                    {/* colors */}
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Color</p>
          <div className="flex gap-1">
            {productDetailItem.color.map((x, index) => {
              return (
                <div
                  key={index}
                  className={`h-8 w-8 cursor-pointer border border-white bg-${x}-600 focus:ring-2 focus:ring-${x}-500 active:ring-2 active:ring-${x}-500`}
                />
              );
            })}
          </div>
        </div>
             {/* Quantity */}
         <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            {/*Buttons to cart and wishlist */}
            <div className=" flex flex-wrap items-center gap-6">
            <button className="add flex items-center justify-center font-medium text-green-400 rounded-md gap-2  h-12 w-1/3   duration-100 hover:bg-blue-800">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <button className="link   font-medium text-green-400 gap-2    duration-100 hover:bg-green-800">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </button>
            </div>

            
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>Collection in store   IT'S FREE</span>
              <hr />
              <span>Standard home delivery  IT'S FREE</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      
    </div>
  );
};

export default Product;