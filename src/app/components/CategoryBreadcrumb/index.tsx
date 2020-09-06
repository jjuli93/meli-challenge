import React from 'react';

import styles from './styles.module.scss';

interface Props {
  categories: string[];
}

function CategoryBreadcrumb({ categories }: Props) {
  return (
    <div className="row wrap p-top-8 p-bottom-8">
      {categories.map(category => (
        <p className={`text-small ${styles.category}`} key={category}>
          {category}
        </p>
      ))}
    </div>
  );
}

export default CategoryBreadcrumb;
