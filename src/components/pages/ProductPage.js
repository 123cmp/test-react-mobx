import React from 'react';
import { observer } from "mobx-react";

import ProductPageItem from '../products/ProductPageItem';

export default observer(function ProductPage(props) {
  const { code, store } = props;
  const product = store.getSpecificProduct(code);

  return <ProductPageItem product={product}/>
});
