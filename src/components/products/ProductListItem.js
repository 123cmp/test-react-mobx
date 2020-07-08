import { Card, Container, Box, CardActions, Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";

import ImageSlider from '../shared/ImageSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
    width: "45%",
    alignSelf: "self-start",
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
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
}));

export default function ProductListItem(props) {
  const classes = useStyles();
  const { code, imageURLs, productName, brandName, price } = props.product;

  return (
    <Card className={classes.root}>
      <Box>
        <Typography gutterBottom variant="h4" className={classes.title} component="h4">
          <Link className={classes.link} to={`/product/${code}`}>{brandName} - {productName}</Link>
        </Typography>
        <Container maxWidth="md">
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
    </Card>
  );
}
