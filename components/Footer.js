import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;
  const { selectedProducts } = useContext(ProductsContext);
  return (
    <footer className="sticky bottom-0 bg-white p-5 w-full flex border-t border-green-300 justify-center space-x-12 text-slate-500">
      <Link
        href={"/"}
        className={
          (path === "/" ? "text-emerald-500" : "") +
          " flex justify-center items-center flex-col"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        <span>Home</span>
      </Link>
      <Link
        href={"/checkout"}
        className={
          (path === "/checkout" ? "text-emerald-500" : "") +
          " flex justify-center items-center flex-col"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span>Cart {selectedProducts.length}</span>
      </Link>
    </footer>
  );
}
