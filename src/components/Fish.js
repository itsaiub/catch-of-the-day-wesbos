import React from "react";
import PropTypes from 'prop-types'
import { formatPrice } from "../helpers";

const Fish = ({ details, index, addToOrder }) => {
  const isAvailable = details.status === "available";
  const handleClick = () => {
    addToOrder(index);
  };

  return (
    <li className="menu-fish">
      <img src={details.image} alt={details.name} />
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button onClick={handleClick} disabled={!isAvailable}>
        {isAvailable ? "Add to Order" : "Sold Out"}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  }),
  index: PropTypes.string.isRequired,
  addToOrder: PropTypes.func
}

export default Fish;
