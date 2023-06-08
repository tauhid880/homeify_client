import React from "react";
import { useQuery } from "@tanstack/react-query";
import Category from "./Category";
import Spinner from "../../Components/Spinner";
import { useTitle } from "../../Hook/useTitle";
import { useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";

const Categories = () => {
  const content = { heads: "All", title: "categories" };
  useTitle("Categories");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/categories`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section
      className="px-4 sm:px-10 lg:px-20 py-20"
      style={{
        backgroundImage: "linear-gradient(90deg, #0201010d 40%, #BBCED5 0%)",
      }}
    >
      <div>
        <SectionTitle content={content}></SectionTitle>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        data-aos="fade-right"
      >
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
