import React from 'react';
import { Container, Box } from "@material-ui/core";

export default function Error() {
  return <Container maxWidth="md">
    <Box>{"Oops... something goes wrong"}</Box>
  </Container>
}
