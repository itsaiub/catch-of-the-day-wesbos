import React from "react";
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { formatPrice } from "../helpers";

const Order = ({ order, fishes, deleteFromOrder }) => {
  const renderOrder = key => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailabe = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    if (!fish) return null;
    if (!isAvailabe) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available.
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span> {count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name} <strong> {formatPrice(count * fish.price)}</strong>
            <button onClick={() => deleteFromOrder(key)}>&times;</button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  const orderIds = Object.keys(order);
  const total = orderIds.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailabe = fish && fish.status === "available";
    if (isAvailabe) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order">
        {order ? orderIds.map(renderOrder) : null}
      </TransitionGroup>
      <div className="total">
        Total:
        <strong> {formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
  fishes: PropTypes.object,
  deleteFromOrder: PropTypes.func
}

export default Order;
