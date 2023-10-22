import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#4d2455").all(10));
  console.log(new Values("#4d2455").all(10));
  
  
  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10))
      toast.success("success");
    } catch (error) {
      toast.error(error.message);
    };
  };
  return (
    <main>
      <ToastContainer position="top-center" theme="dark" draggable />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
