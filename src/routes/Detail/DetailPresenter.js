import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  padding: 30px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  height: 100%;
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Data = styled.div`
  width: 70%;
  padding: 0 10px;
`;

const Title = styled.span`
  font-size: 20px;
`;

const ItemContainer = styled.div`
  margin: 10px 0;
  font-size: 12px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.4;
  width: 80%;
  height: 140px;
  overflow: scroll;
`;

const DetailPresenter = ({ result, loading, error }) => {
  console.log(result, loading, error);
  return (
    <>
      <Helmet>
        <title>
          {loading
            ? "Loading"
            : result.original_title
            ? result.original_title
            : result.original_name}{" "}
          | Popcorn
        </title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          />
          <Content>
            <Cover
              bgImage={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/noPosterSmall.png")
              }
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time}{" "}
                  min
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
            </Data>
          </Content>
        </Container>
      )}
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
