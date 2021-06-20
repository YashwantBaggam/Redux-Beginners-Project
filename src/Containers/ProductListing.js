import React from "react";
import { useSelector } from "react-redux";

export default function ProductListing() {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <h2>ProductListing</h2>
    </div>
  );
}
