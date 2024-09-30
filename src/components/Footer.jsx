import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(45deg, hotpink, brown, purple)",
    color: "#fff",
    padding: "10px",
    position: "relative",
    bottom: 0,
    width: "100%",
  };

  const linkStyle = {
    color: "#ff6f61",
    textDecoration: "underline",
    fontSize: "1.1rem",
  };

  const iconStyle = {
    color: "#ff6f61",
    fontSize: "2rem",
    marginLeft: "10px",
    transition: "color 0.3s ease-in-out",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "20px",
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div>
            <p>
              Made with 💜 by 
              <a 
                href="https://github.com/ReinaLalitta"
                style={linkStyle} 
                target="_blank" 
                rel="noreferrer"
              >
                {" "}Purity Elna Lutta
              </a>
            </p>
            <a 
              href="https://github.com/ReinaLalitta" 
              target="_blank" 
              rel="noreferrer"
              style={iconStyle}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = '#ff6f61'}
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;