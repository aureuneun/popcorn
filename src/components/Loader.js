import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

const Loader = () => {
  return <Container>Loading...</Container>;
};

export default Loader;
