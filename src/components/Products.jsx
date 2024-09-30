import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Fetch categories using axios
  const getCategories = async () => {
    try {
      const response = await axios.get("https://online-food-eatery-backend-52ee84174892.herokuapp.com/api/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  // Fetch products using axios
  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://online-food-eatery-backend-52ee84174892.herokuapp.com/api/menu-product");
      if (componentMounted) {
        setProducts(response.data);
        setFilter(response.data); // Initialize with all products
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(); // Fetch products on component mount
    getCategories(); // Fetch categories on component mount

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {Array(6).fill().map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  // Filter products based on the selected category
  const filterProduct = (categoryId) => {
    const updatedList = products.filter((product) => product.category_id === categoryId);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          {/* Generate category buttons dynamically */}
          <button className="btn btn-outline-dark btn-sm m-2 category-button" onClick={() => setFilter(products)}>Browse</button>
          {categories.map((category) => (
            <button
              key={category.id}
              className="btn btn-outline-dark btn-sm m-2 category-button"
              onClick={() => filterProduct(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100 product-card">
                <img className="card-img-top p-3" src={product.photo_url} alt="Card" height={300} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">KSh {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">Order Now</Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center"> Most Ordered Items </h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
