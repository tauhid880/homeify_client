import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import ProductDetails from "../Pages/Categories/Products/ProductDetails";
import Products from "../Pages/Categories/Products/Products";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedItem from "../Pages/Dashboard/Admin/ReportedItem/ReportedItem";
import MyOrders from "../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Buyers/MyOrders/Payment/Payment";
import WishList from "../Pages/Dashboard/Buyers/WishList/WishList";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Sellers/AddProduct/AddProduct";
import MyBuyers from "../Pages/Dashboard/Sellers/MyBuyers/MyBuyers";
import MyProducts from "../Pages/Dashboard/Sellers/MyProducts/MyProducts";
import SentRequest from "../Pages/Dashboard/SentRequest/SentRequest";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home/Home";
import Login from "../Users/Login";
import Register from "../Users/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/categories", element: <Categories></Categories> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/products/:categoryName",
        loader: async ({ params }) =>
          fetch(
            `https://homeify-server-orpin.vercel.app/products/${params.categoryName}`
          ),
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      { path: "/payment", element: <Payment></Payment> },
      {
        path: "/payment/:title",
        loader: async ({ params }) =>
          fetch(
            `https://homeify-server-orpin.vercel.app/order/payment/${params.title}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  "homeify-token"
                )}`,
              },
            }
          ),
        element: <Payment></Payment>,
      },
      { path: "/productDetails", element: <ProductDetails></ProductDetails> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItem",
        element: (
          <AdminRoute>
            <ReportedItem></ReportedItem>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myWishList",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myBuyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/sentRequest",
        element: (
          <PrivateRoute>
            <SentRequest></SentRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
