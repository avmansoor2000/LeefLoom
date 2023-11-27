import React, { useEffect, useState } from 'react';
import './Popular.css';
import { Link } from 'react-router-dom';



// fiction data
import fiction1 from '../Assets/fiction1.jpg'
import fiction2 from '../Assets/fiction2.jpg'
import fiction3 from '../Assets/fiction3.jpg'
import fiction4 from '../Assets/fiction4.jpg'
import fiction5 from '../Assets/fiction5.jpg'

//nonfiction data

import nonfiction1 from '../Assets/non-fiction1.jpeg'
import nonfiction2 from '../Assets/non-fiction2.jpeg'
import nonfiction3 from '../Assets/non-fiction3.jpeg'
import nonfiction4 from '../Assets/non-fiction4.jpeg'
import nonfiction5 from '../Assets/non-fiction5.jpeg'

//business data

import Business1 from '../Assets/Business1.jpeg'
import Business2 from '../Assets/Business2.jpeg'
import Business3 from '../Assets/Business3.jpeg'
import Business4 from '../Assets/Business4.jpeg'
import Business5 from '../Assets/Business5.jpeg'
import { getProducts } from '../../API_Calls/Products';


const Popular = () => {
  const [data, setData] = useState();

  useEffect(()=>{
    async function fetchData(){
      try {
        const result = await getProducts();
        console.log('result',result.product);
        console.log(result.product);
        setData(result.product)
      } catch (error) {
        
      }
    }
  })

  // const fiction_books = [
  //   {
  //     id: 1,
  //     name: "The Alchemist",
  //     image: fiction1,
  //     price:50,
  //   },
  //   {
  //     id: 2,
  //     name: "The Great Gatsby",
  //     image: fiction2,
  //     price:50,
  //   },
  //   {
  //     id: 3,
  //     name: "A Man Called Ove",
  //     image: fiction3,
  //     price:50,
  //   },
  //   {
  //     id: 4,
  //     name: "One Hundred Years of Solitude",
  //     image: fiction4,
  //     price:50,
  //   },
  //   {
  //     id: 5,
  //     name: "Fahrenheit 451",
  //     image: fiction5,
  //     price:50,
  //   },
  // ]

  // const non_fiction_books =[
  //   {
  //     id: 6,
  //     name: "Into Thin Air",
  //     image: nonfiction1,
  //     price:50,
  //   },
  //   {
  //     id: 7,
  //     name: "Silent Spring",
  //     image: nonfiction2,
  //     price:50,
  //   },
  //   {
  //     id: 8,
  //     name: "In Cold Blood",
  //     image: nonfiction3,
  //     price:50,
  //   },
  //   {
  //     id: 9,
  //     name: "The Right Stuff",
  //     image: nonfiction4,
  //     price:50,
  //   },
  //   {
  //     id: 10,
  //     name: "Alexander Hamilton",
  //     image: nonfiction5,
  //     price:50,
  //   },
  // ]
  
  // const Business_books =[
  //   {
  //     id: 11,
  //     name: "Blue Ocean Strategy",
  //     image: Business1,
  //     price:50,
  //   },
  //   {
  //     id: 12,
  //     name: "Getting Things Done",
  //     image: Business2,
  //     price:50,
  //   },
  //   {
  //     id: 13,
  //     name: "Think and Grow Rich",
  //     image: Business3,
  //     price:50,
  //   },
  //   {
  //     id: 14,
  //     name: "The Lean Startup",
  //     image: Business4,
  //     price:50,
  //   },
  //   {
  //     id: 15,
  //     name: "Zero to One",
  //     image: Business5,
  //     price:50,
  //   },
  // ]

  // const renderProductCard = (item) => (
  //   <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
  //     <div className="card">
  //       <div className="card-img">
  //         <img src={item.image} alt="imageerror" />
  //       </div>
  //       <div className="content-section">
  //         <h5>{item.name}</h5>
  //       </div>
  //     </div>
  //   </Link>
  // );

  return (
    <div className="container-fluid">
      {/* Fiction */}
      {/* <div className="section">
        <Link to="/fiction" style={{ textDecoration: 'none'}}>
          <div className="section-head">
            <h2>Fiction</h2>
            <hr />
          </div>
        </Link>
        <div className="card-grid">{fiction_books.map(renderProductCard)}</div>
      </div> */}

      {/* Non-Fiction */}
      {/* <div className="section">
        <Link to="/non-fiction" style={{ textDecoration: 'none' }}>
          <div className="section-head">
            <h2>Non-Fiction</h2>
            <hr />
          </div>
        </Link>
        <div className="card-grid">{non_fiction_books.map(renderProductCard)}</div>
      </div> */}

      {/* Business */}
      {/* <div className="section">
        <Link to="/business" style={{ textDecoration: 'none' }}>
          <div className="section-head">
            <h2>Business</h2>
            <hr />
          </div>
        </Link>
        <div className="card-grid">{Business_books.map(renderProductCard)}</div>
      </div> */}
    </div>
  );
};

export default Popular;