import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);

  return (
    <div>
      <div className="p-5">
        {success && (
          <div className="mb-5 p-5 rounded-lg bg-green-600 text-white text-xl ">
            💰THANK YOU FOR YOUR PURCHASE💰
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}
