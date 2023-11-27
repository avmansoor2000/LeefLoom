
import React from 'react';
import './Product.css'; 
import { useParams } from 'react-router-dom';
import { useCart } from '../Components/Context/CartContext';


// fiction books

import fiction1 from '../Components/Assets/fiction1.jpg'
import fiction2 from '../Components/Assets/fiction2.jpg'
import fiction3 from '../Components/Assets/fiction3.jpg'
import fiction4 from '../Components/Assets/fiction4.jpg'
import fiction5 from '../Components/Assets/fiction5.jpg'

//non fiction books

import nonfiction1 from '../Components/Assets/non-fiction1.jpeg'
import nonfiction2 from '../Components/Assets/non-fiction2.jpeg'
import nonfiction3 from '../Components/Assets/non-fiction3.jpeg'
import nonfiction4 from '../Components/Assets/non-fiction4.jpeg'
import nonfiction5 from '../Components/Assets/non-fiction5.jpeg'

//business books

import Business1 from '../Components/Assets/Business1.jpeg'
import Business2 from '../Components/Assets/Business2.jpeg'
import Business3 from '../Components/Assets/Business3.jpeg'
import Business4 from '../Components/Assets/Business4.jpeg'
import Business5 from '../Components/Assets/Business5.jpeg'

const Product = () => {
  const { productId } = useParams(); 
  const { addToCart } = useCart();

  const getProductDetails = (id) => {

    const products = [
      {
        category:"fiction",
        id: 1,
        name: "The Alchemist",
        image: fiction1,
        price:50,
      },
      {
        category:"fiction",
        id: 2,
        name: "The Great Gatsby",
        image: fiction2,
        price:50,
      },
      {
        category:"fiction",
        id: 3,
        name: "A Man Called Ove",
        image: fiction3,
        price:50,
      },
      {
        category:"fiction",
        id: 4,
        name: "One Hundred Years of Solitude",
        image: fiction4,
        price:50,
      },
      {
        category:"fiction",
        id: 5,
        name: "Fahrenheit 451",
        image: fiction5,
        price:50,
      },
      {
        category:"non-fiction",
        id: 6,
        name: "Into Thin Air",
        image: nonfiction1,
        price:50,
      },
      {
        category:"non-fiction",
        id: 7,
        name: "Silent Spring",
        image: nonfiction2,
        price:50,
      },
      {
        category:"non-fiction",
        id: 8,
        name: "In Cold Blood",
        image: nonfiction3,
        price:50,
      },
      {
        category:"non-fiction",
        id: 9,
        name: "The Right Stuff",
        image: nonfiction4,
        price:50,
      },
      {
        category:"non-fiction",
        id: 10,
        name: "Alexander Hamilton",
        image: nonfiction5,
        price:50,
      },
      {
        category:"business",
        id: 11,
        name: "Blue Ocean Strategy",
        image: Business1,
        price:50,
      },
      {
        category:"business",
        id: 12,
        name: "Getting Things Done",
        image: Business2,
        price:50,
      },
      {
        category:"business",
        id: 13,
        name: "Think and Grow Rich",
        image: Business3,
        price:50,
      },
      {
        category:"business",
        id: 14,
        name: "The Lean Startup",
        image: Business4,
        price:50,
      },
      {
        category:"business",
        id: 15,
        name: "Zero to One",
        image: Business5,
        price:50,
      },
    ];
    return products.find(product => product.id.toString() === id);
  };

  const product = getProductDetails(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
