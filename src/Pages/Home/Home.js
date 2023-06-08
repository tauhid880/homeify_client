import React from "react";
import Advertised from "../Advertised/Advertised";
import Categories from "../Categories/Categories";
import Activities from "./Activities/Activities";
import Banner from "./Banner";
import About from "../About/About";
import { useTitle } from "../../Hook/useTitle";
import { useEffect } from "react";
import Count from "./Count";
import AddBanner from "../../Components/AddBanner";
import UpdateSection from "../../Components/UpdateSection";
import SingUpNow from "../../Components/SingUpNow";
import Artical from "../../Components/Artical";
import Products from "./AllProducts/Products";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner></Banner>
      <AddBanner></AddBanner>
      <Products></Products>
      <Advertised></Advertised>
      {/* <Activities></Activities> */}
      <Categories></Categories>
      <About></About>
      <Artical></Artical>
      <Count></Count>
      <SingUpNow></SingUpNow>
      <UpdateSection></UpdateSection>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
