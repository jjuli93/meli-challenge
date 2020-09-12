import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import { Product } from '~app/models/product';
import { formatTotalPrice } from '~app/utils/currency';
import { productDetail } from '~components/Routes/paths';

import styles from './styles.module.scss';
import freeShipingIcon from './assets/ic_shipping.png';

interface Props {
  product: Product;
  isLastItem: boolean;
}

function ProductItem({ product, isLastItem }: Props) {
  const { price, title, freeShipping, picture, id } = product;
  const detailPath = productDetail.path.replace(productDetail.params.id, id.toString());

  return (
    <section>
      <div className={`row p-8 ${styles.container}`}>
        <Link to={detailPath}>
          <img className={styles.image} src={picture} alt={title} />
        </Link>
        <div className={`column p-8 item-1 ${styles.description}`}>
          <div className="row middle">
            <p className="text-large m-right-3">{formatTotalPrice(price)}</p>
            {freeShipping && (
              <img
                className={styles.freeShippingIcon}
                src={freeShipingIcon}
                title={i18next.t('ProductItem:freeShippingAlt') as string}
                alt={i18next.t('ProductItem:freeShippingAlt') as string}
              />
            )}
          </div>
          <p className={`m-bottom-5 self-end text-xsmall ${styles.city}`}>{product.city}</p>
          <Link to={detailPath}>
            <p className="text-medium">{product.title}</p>
          </Link>
        </div>
      </div>
      {!isLastItem && <div className={styles.break} />}
    </section>
  );
}

export default ProductItem;
