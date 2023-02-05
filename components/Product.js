import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Product({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
  }
  return (
    <div className="w-64">
      <div className="bg-emerald-100 p-5 rounded-xl  ">
        <img src={picture} alt=" " />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-21 leading-4 text-gray-600">{description}</p>
      <div className="flex mt-1">
        <div className=" text-2xl font-bold grow">{price}</div>
        <button
          onClick={addProduct}
          className="bg-emerald-500 text-white py-1 px-3 rounded-md hover:bg-emerald-300 hover:shadow-2xl  "
        >
          +
        </button>
      </div>
    </div>
  );
}
