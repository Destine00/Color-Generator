import React, { useState } from "react";

const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      addColor(color)
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          id="text"
          value={color}
          placeholder="#3c43a0"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          generate
        </button>
      </form>
    </section>
  );
};

export default Form;
