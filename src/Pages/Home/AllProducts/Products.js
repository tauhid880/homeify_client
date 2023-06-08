import React from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle";
import Product from "../../Categories/Products/Product";
const Products = () => {
  const { data: products = [], isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/products`
      );
      const data = await res.json();
      return data;
    },
  });

  const content = { heads: "All", title: "Products" };
  return (
    <>
      <div className="pb-20">
        <section className="px-4 sm:px-10 lg:px-20 py-12 md:py-20 bg-[#0201010d]">
          <div>
            <SectionTitle content={content}></SectionTitle>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
