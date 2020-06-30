import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import { movieApi, tvApi } from "../../api";

const DetailContainer = ({ location: { pathname }, history: { push } }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMovie] = useState(() => pathname.includes("/movie/"));
  const { id } = useParams();
  const getApi = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    if (isMovie) {
      ({ data: result } = await movieApi.movieDetail(id));
    } else {
      ({ data: result } = await tvApi.showDetail(id));
    }
    setResult(result);
    setLoading(false);
  };
  useEffect(() => {
    try {
      getApi();
    } catch (error) {
      setError("Can't find anything.");
      setLoading(false);
    } finally {
    }
  }, []);
  return <DetailPresenter result={result} loading={loading} error={error} />;
};

export default DetailContainer;
