import React, { useEffect, useState } from 'react';
import { getProducts } from '../../API_Calls/Products';
function Product() {
    const [data, setData] = useState();

    useEffect(()=>{
      async function fetchData(){
        console.log('rrrrrrrrrrr');
        try {
          const result = await getProducts();
          console.log('result',result.product);
          console.log(result.product);
          setData(result.product)
        } catch (error) {
          
        }
      }
      fetchData();
    },[])

  return (
    <div>product</div>
  )
}

export default Product