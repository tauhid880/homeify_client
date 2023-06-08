import React from "react";
import { useQuery } from "@tanstack/react-query";
import Product from "../Categories/Products/Product";
import SectionTitle from "../../Shared/SectionTitle";

const Advertised = () => {
  const { data: advertised = [], isError } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/advertised`
      );
      const data = await res.json();
      return data;
    },
  });

  const content = { heads: "latest", title: "advertise products" };
  return (
    <>
      <div className="pb-20">
        {advertised.length > 0 && (
          <section className="px-4 sm:px-10 lg:px-20 py-12 md:py-20 bg-[#0201010d]">
            <div>
              <SectionTitle content={content}></SectionTitle>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="fade-up"
            >
              {advertised.map((advertise) => (
                <Product key={advertise._id} product={advertise}></Product>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Advertised;
