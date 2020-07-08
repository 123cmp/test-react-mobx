import 'react-slideshow-image/dist/styles.css';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Slide } from 'react-slideshow-image';

import { SLIDER_PROPERTIES } from "../../constants";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    margin: "auto"
  },
  eachSlide: {
    display: "flex",
    alignItems: "center",
    background: "center no-repeat",
    justifyContent: "center",
    backgroundSize: "contain",
    height: 400,
    width: "auto"
  }
});

export default function ImageSlider(props) {
  const classes = useStyles();
  const imageSet = props.imageSet || [];

  return (
    <div className={classes.root}>
      <Slide {...SLIDER_PROPERTIES}>
        {
          imageSet.map((imageUrl, index) =>
            <div key={index}>
              <div className={classes.eachSlide} style={{ 'backgroundImage': `url(${imageUrl})` }}/>
            </div>
          )
        }
      </Slide>
    </div>
  )
};
