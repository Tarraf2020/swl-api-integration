import styles from "../styles/ProductDetailsPopup.module.css";
import { FaTag, FaDollarSign, FaStar } from "react-icons/fa";

const ProductDetailsPopup = ({ product, onClose }) => (
  <div className={styles.overlay} onClick={onClose}>
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <img
        src={product.image}
        alt={product.title}
        className={styles.largeImage}
      />
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.infoGroup}>
        <div className={styles.infoItem}>
          <FaTag />
          <span className={styles.infoLabel}>Category:</span> {product.category}
        </div>
        <div className={styles.infoItem}>
          <FaDollarSign />
          <span className={styles.infoLabel}>Price:</span> ${product.price}
        </div>
        <div className={styles.infoItem}>
          <FaStar />
          <span className={styles.infoLabel}>Rating:</span>{" "}
          {product?.rating?.rate} / 5
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailsPopup;
