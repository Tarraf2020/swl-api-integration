import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onClick }) => (
  <div className={styles.card} onClick={() => onClick(product)}>
    <img src={product.image} alt={product.title} className={styles.image} />
    <h2 className={styles.title}>{product.title}</h2>
    <p className={styles.price}>${product.price}</p>
  </div>
);

export default ProductCard;
