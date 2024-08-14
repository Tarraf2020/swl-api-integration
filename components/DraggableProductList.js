import { useCallback, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/DraggableProductList.module.css";
import { saveToSession } from "../utils/sessionActions";

const DraggableProductList = ({ products, setProducts, onProductClick }) => {
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragPut = useCallback((index) => {
    const updatedProducts = [...products];
    const item = updatedProducts.splice(draggedItemIndex, 1)[0];
    updatedProducts.splice(index, 0, item);
    setDraggedItemIndex(index);
    saveToSession("DATA", updatedProducts);
    setProducts(updatedProducts);
  });

  const handleProductClick = useCallback(
    (product) => {
      onProductClick(product);
    },
    [onProductClick]
  );

  const handleSetDraggedItemIndex = useCallback(
    (index) => {
      setDraggedItemIndex(index);
    },
    [setDraggedItemIndex]
  );

  return (
    <div className={styles.list}>
      {products?.map((product, index) => (
        <div
          key={product.id}
          draggable
          onDragStart={() => handleSetDraggedItemIndex(index)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => handleDragPut(index)}
        >
          <ProductCard
            onClick={() => handleProductClick(product)}
            product={product}
          />
        </div>
      ))}
    </div>
  );
};

export default DraggableProductList;
