import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="image-profile">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/me-1.jpg`}
            alt="Karen Rodriguez profile"
          />
        </div>
        <div className="name">
          <h1 className="names">Karen Gueila</h1>
          <h1 className="last-name">Rodriguez Granadero</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
