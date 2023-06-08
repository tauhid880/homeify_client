import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import TestimonialsCard from "../Testimonials/TestimonialsCard";

const Testimonials = () => {
  //   const { data: testimonials = [], refetch } = useQuery({
  //     queryKey: ["testimonials"],
  //     queryFn: async () => {
  //       const res = await fetch("https://havenly-s.vercel.app/testimonial");
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  const testimonials = [
    {
      id: 1,
      ratings: "4",
      reviews:
        "Bought another 10 chairs to 'top up' on the 50 we bought last autumn.Order went through quickly and easily.Then Beth phoned to provide details of the delivery - which was quicker than I had expected.",
      reviewer: "Jone Doe",
      reviewerImage:
        "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      ratings: "4.5",
      reviews:
        "always good service. have had several orders from here good quality and always keep you updated on your order.",
      reviewer: "Alex John",
      reviewerImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      ratings: "5",
      reviews:
        "Great service, great quality would recommend without hesitation. Thank you Trent Furniture we will use you again in the future",
      reviewer: "Diana Leo",
      reviewerImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    },
  ];

  return (
    <div>
      <div className="text-center py-10 mb-10">
        <h1 className="text-xl text-secondary font-semibold font-Poppins text-center mb-4">
          Reviews
        </h1>
        <h1 className="text-4xl w-96 mx-auto leading-normal font-semibold font-Poppins mb-12">
          Read What others have to say
        </h1>
        <div className="px-8 lg:px-0 text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-8 group">
          {testimonials.map((testimonial) => (
            <TestimonialsCard
              key={testimonial.id}
              testimonial={testimonial}
            ></TestimonialsCard>
          ))}
        </div>
        <div className="md:mt-12 mt-20 px-8 lg:px-0 flex justify-center">
          <Link to="/">
            <button className="text-base font-bold leading-4 text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 sm:w-auto w-full rounded px-4 py-4 focus:outline-none  hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white">
              See More Reviews
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
