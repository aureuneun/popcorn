import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getApi = async () => {
    const {
      data: { results: nowPlaying },
    } = await movieApi.nowPlaying();
    const {
      data: { results: upcoming },
    } = await movieApi.upcoming();
    const {
      data: { results: popular },
    } = await movieApi.popular();
    setNowPlaying(nowPlaying);
    setUpcoming(upcoming);
    setPopular(popular);
    setLoading(false);
  };
  useEffect(() => {
    try {
      getApi();
    } catch (error) {
      setError("Can't find movie information.");
      setLoading(false);
    } finally {
    }
  }, []);
  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default HomeContainer;
