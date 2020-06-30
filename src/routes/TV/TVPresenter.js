import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, airingToday, popular, loading, error }) => {
  console.log(topRated, airingToday, popular, loading, error);
  return (
    <>
      <Helmet>
        <title>TVs | Popcorn</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && (
            <Section title="Top Rated">
              {topRated.map((show) => (
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
          {airingToday && (
            <Section title="Airing Today">
              {airingToday.map((show) => (
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
          {popular && (
            <Section title="Popular">
              {popular.map((show) => (
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
        </Container>
      )}
    </>
  );
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
