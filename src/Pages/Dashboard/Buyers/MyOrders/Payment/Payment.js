import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../../../Components/Spinner';
import { useTitle } from '../../../../../Hook/useTitle';
import { useEffect } from 'react';



const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`)

const Payment = () => {
  useTitle('Payment')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const order = useLoaderData()
  const navigateion = useNavigation()
  if(navigateion.state==='loading'){
    return <Spinner></Spinner>
  }
    return (
      <div className="relative">
      <img
        src="https://i.ibb.co/McgcXpd/spacejoy-Yn-LJ3r-M4-Vt-I-unsplash.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 min-h-screen">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-6/12 m-auto">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <div className='sm:w-96  m-auto mb-4'>
                   <Elements stripe={stripePromise}>
                       <CheckoutForm order={order}/>
                     </Elements>        
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Payment;