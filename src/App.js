import React, { useEffect, useRef } from "react";
import { getAllData, saveItem } from "./firebase/functions";

const App = () => {
  let productName = useRef();
  let price = useRef();

  let addItem = async () => {
    let product = {
      productName: productName.current.value,
      price: price.current.value,
    };

    let res = await saveItem(product);
    console.log(res);
  };

  useEffect(() => {
    getAllData();
  });

  return (
    <div>
      <input type="text" ref={productName} />
      <input type="text" ref={price} />
      <button onClick={addItem}>Submit</button>
    </div>
  );
};

export default App;
