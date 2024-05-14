import React from 'react'
import Card from '../Card/Card';
import "./CardDesign.css";
import { Link } from "react-router-dom";

const CardDesign = () => {
    const data = [
        {
          id:1,
          img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Product 1",
          price: '$59.99',
        },
        {
          id:2,
          img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Product 2" ,
          price: '$39.99',
        },
        {
          id:3,
          mainimg:"https://images.unsplash.com/photo-1706550632841-50c6e4a4dc99?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Product 3",
          price: '$19.99',
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 1",
            price: '$59.99',
          },
          {
            id:5,
            img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 2" ,
            price: '$39.99',
          },
          {
            id:6,
            mainimg:"https://images.unsplash.com/photo-1706550632841-50c6e4a4dc99?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2:"https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Product 3",
            price: '$19.99',
          },
    ]
   
    
  return (
    <div className='text-black flex  justify-center   gap-2 m-10'>
     
 
  {data.map((item) => (
  <Card  item={item} key={item.id}/>
  ))}
   </div>
)}

export default CardDesign