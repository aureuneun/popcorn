import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 125px);
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
