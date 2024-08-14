import { useState, useEffect, useCallback } from "react";
import DraggableProductList from "../components/DraggableProductList";
import ProductDetailsPopup from "../components/ProductDetailsPopup";
import styles from "../styles/Home.module.css";
import { saveToSession } from "../utils/sessionActions";
import { getProducts } from "../services/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSetSelectedProducts = useCallback((product) =>
    setSelectedProduct(product)
  );

  const handleSetProducts = useCallback((updatedProducts) =>
    setProducts(updatedProducts)
  );

  useEffect(() => {
    const handleGetAllProducts = async () => {
      const response = await getProducts();
      response.status
        ? alert(response.data.message)
        : (handleSetProducts(response), saveToSession("DATA", response));
    };
    handleGetAllProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product Store</h1>
      <DraggableProductList
        products={products}
        setProducts={handleSetProducts}
        onProductClick={handleSetSelectedProducts}
      />
      {selectedProduct && (
        <ProductDetailsPopup
          product={selectedProduct}
          onClose={() => handleSetSelectedProducts(null)}
        />
      )}
    </div>
  );
}
