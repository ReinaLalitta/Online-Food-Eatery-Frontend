import React from 'react';
import { Footer, Navbar } from "../components";
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 about-container">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center about-description">
          Welcome to our Online Food Store Eatery, where quality and convenience come together to bring you the best dining experience. We take pride in offering a diverse selection of freshly prepared meals, ensuring that each dish is crafted with care. From local favorites to international cuisines, our menu is designed to satisfy every craving.

          Whether you're ordering for a quick lunch, a family dinner, or catering for a special event, our platform makes it easy to browse, customize, and place your order. With a commitment to fast delivery, fresh ingredients, and exceptional service, we aim to make every meal a memorable one.

          Our team continuously works to improve your experience, ensuring that you can enjoy restaurant-quality food from the comfort of your home. Thank you for choosing us to fulfill your food cravings. We look forward to serving you!
        </p>

        <h2 className="text-center py-4">Our Menu</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 menu-card">
              <img className="card-img-top img-fluid menu-image" src="https://media.istockphoto.com/id/1219721088/photo/assorted-delicious-grilled-meat-on-a-barbecue.webp?a=1&b=1&s=612x612&w=0&k=20&c=eGTh5EXcZkcA2w94UHNQNaidg55WVlEYQrVuVPMcnDo=" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Food Serving</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 menu-card">
              <img className="card-img-top img-fluid menu-image" src="https://media.istockphoto.com/id/470309050/photo/cola.webp?a=1&b=1&s=612x612&w=0&k=20&c=eLbKlbOCmQiOWHY2tipa8QNnB4Lcey12aFTzq0dXfgQ=" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Cocktail Drinks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 menu-card">
              <img className="card-img-top img-fluid menu-image" src="https://media.istockphoto.com/id/497959594/photo/fresh-cakes.webp?a=1&b=1&s=612x612&w=0&k=20&c=5sHm3f8aZRX7Y5C4xcEwQmsYYghtS8GLMz3xygCA_Kk=" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Delicious Desserts</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 menu-card">
              <img className="card-img-top img-fluid menu-image" src="https://images.unsplash.com/photo-1585341840941-98553e474d84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuZGluZyUyMHNuYWNrJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Snacks In Plenty</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
