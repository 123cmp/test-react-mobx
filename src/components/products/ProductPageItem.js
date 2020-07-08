import { Container, Box, CardActions, Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import ImageSlider from '../shared/ImageSlider';

const useStyles = makeStyles({
  root: {
    margin: "20px",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    margin: 20,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 20px"
  },
  link: {
    color: "inherit",
    textDecoration: "inherit"
  }
});

export default function ProductListItem(props) {
  const classes = useStyles();
  const { imageURLs, productName, brandName, price } = props.product;

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography gutterBottom variant="h4" className={classes.title} component="h4">
          {brandName} - {productName}
        </Typography>
        <Container maxWidth="lg">
          <ImageSlider imageSet={imageURLs}/>
        </Container>
      </Box>
      <CardActions className={classes.actions}>
        <Typography gutterBottom variant="h5" component="h5">
          {price}
        </Typography>
        <Button variant="outlined" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Container>
  );
}
