import React from "react";
import { Link } from "react-router-dom";
import UserImg from "./ic_person_black_24px.svg";

const Header = props => {
  // QUESTION: we want the currently selected view to be highlighted.
  // can this come from the react router match props?
  return (
    <div>
      {/* Mobile view */}
      <div className="header header-mobile">
        <Link to="/">
          <h2 className="nav-item dashboard">Dashboard</h2>
        </Link>
        <div className="header-stretch" />
        <h2 className="nav-item user-icon">
          <img src={UserImg} alt="user" />
        </h2>
      </div>
      {/* Desktop View */}
      <div className="header header-desktop">
        <Link to="/">
          <h2 className="nav-item dashboard">Dashboard</h2>
        </Link>
        <Link to="/decks/new">
          <h2 className="nav-item create">Create Deck</h2>
        </Link>
        <h2 className="nav-item your-decks">Your Decks</h2>
        <Link to="/Play">
          <h2 className="nav-item review">Review</h2>
        </Link>
        <div className="header-stretch" />
        <h2 className="nav-item user-icon">
          <img src={UserImg} alt="user" />
          <p>username</p>
        </h2>
      </div>
    </div>
  );
};

export default Header;
