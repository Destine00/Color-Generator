import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Cannot copy to clipboard");
    }
  };
  return (
    <div
      onClick={copyToClipboard}
      className={index > 9 ? "color color-light" : "color"}
      style={{ background: `#${color.hex}` }}
    >
      <p className="color-value">#{hex}</p>
      <p className="percent-value">{weight}%</p>
    </div>
  );
};

export default SingleColor;
