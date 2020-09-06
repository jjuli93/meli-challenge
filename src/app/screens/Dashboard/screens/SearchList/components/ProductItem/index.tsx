import React from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';

import { Product } from '~app/models/product';
import { getCurrencySymbol, getTotalPrice } from '~app/utils/currency';
import { formatNumber } from '~app/utils/numbers';
import { productDetail } from '~components/Routes/paths';

import styles from './styles.module.scss';
import freeShipingIcon from './assets/ic_shipping.png';

interface Props {
  product: Product;
  isLastItem: boolean;
}

function ProductItem({ product, isLastItem }: Props) {
  const { price, title, freeShipping, picture, id } = product;
  const totalPrice = getTotalPrice(price.amount, price.decimals);
  const detailPath = productDetail.path.replace(productDetail.params.id, id.toString());
  // TODO: add alt to image

  return (
    <>
      <div className="row p-8">
        <Link to={detailPath}>
          <img className={styles.image} src={picture} alt={title} />
        </Link>
        <div className="column p-8">
          <div className="row middle m-bottom-8">
            <p className="text-large m-right-3">
              {`${getCurrencySymbol(price.currency)}${formatNumber(totalPrice)}`}
            </p>
            {freeShipping && (
              <img
                className={styles.freeShippingIcon}
                src={freeShipingIcon}
                alt={i18next.t('SearchBar:placeholder') as string}
              />
            )}
          </div>
          <Link to={detailPath}>
            <p className="text-medium">{product.title}</p>
          </Link>
        </div>
      </div>
      {!isLastItem && <div className={styles.break} />}
    </>
  );
}

export default ProductItem;