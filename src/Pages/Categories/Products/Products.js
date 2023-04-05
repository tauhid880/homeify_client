import React from 'react';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';
import { useNavigation } from "react-router-dom";
import Spinner from '../../../Components/Spinner';
import { useTitle } from '../../../Hook/useTitle';
import { useEffect } from 'react';

const Products = () => {
    const navigation = useNavigation()
    const products = useLoaderData()
    useTitle('Products')
    
    useEffect(() => {
      window.scrollTo(0, 0)
      }, [])

    if(navigation.state==='loading'){
      return <Spinner></Spinner>
    }
    return (
        <section className='px-4 sm:px-10 lg:px-20 py-28 bg-[#FAF8F8]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8' data-aos="fade-up">
          {
           products.map(product=><Product key={product._id} product={product}></Product>)
          }
       </div>
      </section>
    );
};

export default Products;