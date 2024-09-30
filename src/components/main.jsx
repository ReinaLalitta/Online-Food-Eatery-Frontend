import React from "react";

const Home = () => {
  const heroStyle = {
    background: "linear-gradient(135deg, orange, red, green)",
    padding: "50px 0",
    color: "#fff",    
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "3rem",
    marginBottom: "10px",
    letterSpacing: "2px",
  };

  const textStyle = {
    fontSize: "1.5rem",
    fontStyle: "italic",
  };

  return (
    <>
      <div className="hero" style={heroStyle}>
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/fast.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <div className="container" style={overlayStyle}>
              <h5 className="card-title" style={titleStyle}>Delicious Food In All You Can Eat Eatery</h5>
              <p className="card-text" style={textStyle}>
                Working Towards The Customers' Satisfaction Which Keeps Them Coming Back For More
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;