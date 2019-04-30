import React from "react";

const EditFishForm = ({ fish, updateFish, index, deleteFish }) => {
  const handleChange = e => {
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    updateFish(index, updatedFish);
  };

  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={fish.name}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        value={fish.price}
      />
      <select
        type="text"
        name="status"
        onChange={handleChange}
        value={fish.status}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        type="text"
        name="desc"
        onChange={handleChange}
        value={fish.desc}
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={fish.image}
      />
      <button onClick={() => deleteFish(index)}>Remove Fish</button>
    </div>
  );
};

export default EditFishForm;
