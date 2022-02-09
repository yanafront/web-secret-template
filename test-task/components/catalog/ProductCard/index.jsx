import Link from 'next/link';
import { useState } from 'react';
import { LikeIcon } from '../../icons/LikeIcon';
import styles from './ProductCard.module.css'


export const ProductCard = ({ title, image, slug, price, isNew }) => {
    const [isFavorites, setIsFavorites] = useState(false);
    return (
        <div className={styles.ProductCard}>
            <div className={styles.ProductCard__ContainerImage}>
                <div className={styles.ProductCard__NewBadge}>Новинка</div>
                <picture>
                    <source type="image/webp" media="(min-width: 1170px)" srcSet={`${image.desktop.webp_x1}, ${image.desktop.webp_x2}`} />
                    <source media="(min-width: 1170px)" srcSet={`${image.desktop.x1}, ${image.desktop.x2}`} />

                    <source type="image/webp" media="(min-width: 768px)" srcSet={`${image.tablet.webp_x1}, ${image.tablet.webp_x2}`} />
                    <source media="(min-width: 768px)" srcSet={`${image.tablet.x1}, ${image.tablet.x2}`} />

                    <source type="image/webp" media="(min-width: 768px)" srcSet={`${image.tablet.webp_x1}, ${image.tablet.webp_x2}`} />
                    <source media="(min-width: 768px)" srcSet={`${image.tablet.x1}, ${image.tablet.x2}`} />

                    <source type="image/webp" media="(min-width: 320px)" srcSet={`${image.mobile.webp_x1}, ${image.mobile.webp_x2}`} />
                    <source media="(min-width: 320px)" srcSet={`${image.mobile.x1}, ${image.mobile.x2}`} />

                    <img className={styles.ProductCard__Image} srcSet={`${image.desktop.webp_x1}, ${image.desktop.webp_x2}`} src={image.desktop.webp_x2} alt={title} loading="lazy" />
                </picture>
            </div>
            <div className={styles.ProductCard__Info}>
                <div className={styles.ProductCard__Title}>
                    <Link href={`/product/${slug}`}>{title}</Link>
                </div>
                <div className={styles.ProductCard__Price}>{price} ₽</div>
                <div className={styles.ProductCard__Action}>
                    <button className={styles.ProductCard__Button}>
                        В корзину
                    </button>
                    <button className={styles.ProductCard__TransparentButton} onClick={() => setIsFavorites(!isFavorites)}>
                        <LikeIcon currentColor={isFavorites ? "black" : "#DBDBDB"} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;