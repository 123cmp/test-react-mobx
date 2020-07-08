import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { observer } from "mobx-react"

import ProductListItem from '../products/ProductListItem';
import SearchField from '../shared/SearchField';
import ProductPagination from '../products/ProductPagination';

export default observer(function ProductListPage(props) {
  const { page, totalPages, pageNumber, setPage, setFilter } = props.store;

  function handlePageChange(event, pageNumber) {
    setPage(pageNumber);
    window.scrollTo(0, 0);
  }

  function onFilterChange(event) {
    setFilter(event.target.value);
    setPage(1);
  }

  return <>
    <SearchField onFilterChange={onFilterChange}/>
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {page.map(
          (product) => <ProductListItem key={product.code} product={product}/>
        )}
      </Grid>
    </Container>
    <ProductPagination totalPages={totalPages} page={pageNumber} handlePageChange={handlePageChange}/>
  </>
});
