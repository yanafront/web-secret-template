import ProductCard from '../ProductCard/index';
import styles from './ProductList.module.css'

export const ProductList = ({ products }) => {
    return (
        <>

            {!(products || []).length
              ? (<div className={styles.EmptyList}>No results</div>)
              : (
                <div className={styles.ProductList}>
                    {(products || []).map((el) => (
                      <ProductCard key={el.slug} title={el.title} image={el.image} slug={el.slug} price={el.price} isNew={!!el.is_new} />
                    ))}
                </div>
              )
            }
        </>
    )
}

export default ProductList;
