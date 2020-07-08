import Pagination from "@material-ui/lab/Pagination/Pagination";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export default function ProductPagination(props) {
  const classes = useStyles();
  const { totalPages, handlePageChange, page } = props;

  return <Pagination
    className={classes.root}
    page={page}
    onChange={handlePageChange}
    count={totalPages}
    size="large"
  />
}
