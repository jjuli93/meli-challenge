import React from 'react';
import i18next from 'i18next';

import { getCurrencySymbol, getDecimals } from '~app/utils/currency';
import { formatNumber } from '~app/utils/numbers';
import { ProductDetail } from '~app/models/product';

import styles from './styles.module.scss';

interface Props {
  product: ProductDetail;
}

function ProductInfo({ product }: Props) {
  const { picture, condition, description, price, soldQuantity, title } = product;

  return (
    <section className={`column p-16 ${styles.container}`}>
      <div className={`row m-bottom-20 ${styles.header}`}>
        <img className={styles.image} src={picture} alt={title} />
        <div className={`column p-left-16 ${styles.heading}`}>
          <p className="capitalize text-small m-bottom-4">
            {condition} - {soldQuantity} {i18next.t('ProductInfo:sold') as string}
          </p>
          <p className="text-large m-bottom-8">{title}</p>
          <p className="row m-bottom-8">
            <span className="text-xxxlarge text-nowrap">
              {getCurrencySymbol(price.currency)} {formatNumber(price.amount)}
            </span>
            <span className="text-medium">{getDecimals(price.decimals)}</span>
          </p>
          <button
            className="button primary full-width"
            type="button"
            aria-label={i18next.t('ProductInfo:buy') as string}
          >
            {i18next.t('ProductInfo:buy')}
          </button>
        </div>
      </div>
      <p className="text-xlarge m-bottom-8">{i18next.t('ProductInfo:description')}</p>
      <p className={`text-normal ${styles.description}`}>{description}</p>
    </section>
  );
}

export default ProductInfo;
