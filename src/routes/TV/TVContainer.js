import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getApi = async () => {
    const {
      data: { results: topRated },
    } = await tvApi.topRated();
    const {
      data: { results: popular },
    } = await tvApi.popular();
    const {
      data: { results: airingToday },
    } = await tvApi.airingToday();
    setTopRated(topRated);
    setPopular(popular);
    setAiringToday(airingToday);
    setLoading(false);
  };
  useEffect(() => {
    try {
      getApi();
    } catch (error) {
      setError("Can't find TV information.");
      setLoading(false);
    } finally {
    }
  }, []);
  return (
    <TVPresenter
      topRated={topRated}
      airingToday={airingToday}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;
