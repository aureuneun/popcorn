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

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log(nowPlaying, upcoming, popular, loading, error);
  return (
    <>
      <Helmet>
        <title>Movies | Popcorn</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && (
            <Section title="Now Playing">
              {nowPlaying.map((movie) => (
                <Poster
                  id={movie.id}
                  key={movie.id}
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
          {upcoming && (
            <Section title="Upcoming">
              {upcoming.map((movie) => (
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
          {popular && (
            <Section title="Popular">
              {popular.map((movie) => (
                <Poster
                  id={movie.id}
                  key={movie.id}
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
          {error && <Message text={error} color="#e74c3c" />}
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
