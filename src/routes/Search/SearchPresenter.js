import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0 10px;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 25px;
  margin-bottom: 30px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  onSubmit,
  onChange,
}) => {
  return (
    <Container>
      <Helmet>
        <title>Search | Popcorn</title>
      </Helmet>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="term"
          placeholder="Search Movies or TVs..."
          onChange={onChange}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && (
            <Section title="Show Results">
              {tvResults.map((show) => (
                <Poster
                  id={show.id}
                  key={show.id}
                  title={show.original_name}
                  image={show.poster_path}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} color="#e74c3c" />}
        </>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchPresenter;
