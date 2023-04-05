import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../../Components/Spinner";
import { useState } from "react";
import SectionTop from "../../Shared/SectionTop";
import { useTitle } from "../../Hook/useTitle";

const Blog = () => {
  useTitle("Blog");
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://homeify-server-orpin.vercel.app/blogs`)
      .then((data) => {
        setBlog(data.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="bg-background min-h-screen items-center">
      <SectionTop title="Frequently Asked Questions"></SectionTop>
      <div
        className="container flex flex-col justify-center p-4 mx-auto md:p-8"
        data-aos="fade-up"
      >
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          {blogs.map((blog) => {
            const { _id, answer, question } = blog;
            return (
              <details key={_id}>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  {question}
                </summary>
                <div className="px-4 pb-4">
                  <p>{answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
