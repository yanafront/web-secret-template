import { useEffect, useState } from 'react';
import styles from './ProductFilter.module.css'
import { useRouter } from 'next/router'

export const MULTIPLE_FILTER_TYPE = "multiple";

export const ProductFilter = ({ countProducts, filters }) => {
    const [priceFilter, setPriceFilter] = useState();
    const [minValue, setMinValue] = useState();
    const [maxValue, setMaxValue] = useState();
    const [multipleFilter, setMultipleFilter] = useState();
    const router = useRouter();

    const onChangeMinPrice = (e) => {
        router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              "price[min]": e.target.value
            },
        });
    }

    const onChangeMaxPrice = (e) => {
        router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              "price[max]": e.target.value
            },
        });
    }

    const onChangeMultipleFilter = (filter, val, event, index) => {
        const nameFilter = `${filter.slug}[${index}]`;
        if (!event.target.checked) {
            delete router.query[nameFilter]
            return router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                },
            });
        }
        
        router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              [nameFilter]: val
            },
        });
    } 

    useEffect(() => {
        (filters || []).filter((el) => {
            if (el.min && el.max) {
                setPriceFilter(el)
            }

            if (el.type === MULTIPLE_FILTER_TYPE) {
                setMultipleFilter(el)
            }
        })
    }, [filters]);
    return (
        <div className={styles.ProductFilter}>
            <div className={styles.ProductFilter__CountProducts}>
                Товаров {countProducts}
            </div>
            <div className={styles.ProductFilter__Title}>
                Камеры
            </div>
            <div className={styles.ProductFilter__Subtitle}>
                Цена, ₽
            </div>
            {!!priceFilter && (
                <div className={styles.ProductFilter__PriceFilter}>
                    <input type="text" defaultValue={priceFilter.min} onChange={(e) => onChangeMinPrice(e)} />
                    <input type="text" defaultValue={priceFilter.max} onChange={(e) => onChangeMaxPrice(e)} />
                </div>
            )}
            {!!multipleFilter && (
                <div>
                    <div className={styles.ProductFilter__Subtitle}>
                        {multipleFilter.title}
                    </div>
                    {(multipleFilter.items || []).map((item, index) => (
                        <div key={index} className={styles.ProductFilter__CheckboxContainer}>
                            <input type="checkbox" name={item.title} id={item.title} onChange={(event) => onChangeMultipleFilter(multipleFilter, item.value, event, index)} />
                            <label htmlFor={item.title}>{item.title}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductFilter;