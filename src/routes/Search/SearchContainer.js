import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("code");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };
  const searchByTerm = async (term) => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(term);
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);
      setMovieResults(movieResults);
      setTvResults(tvResults);
      setLoading(false);
      console.log(movieResults, tvResults);
    } catch (error) {
      setError("Can't find results.");
      setLoading(false);
    } finally {
    }
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setSearchTerm(value);
  };
  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default SearchContainer;
