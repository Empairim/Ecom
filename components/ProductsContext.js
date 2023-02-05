import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state"; //so even if page is refreshed items saved in cart

export const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocalStorageState("cart", {
    defaultValue: [],
  });
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
