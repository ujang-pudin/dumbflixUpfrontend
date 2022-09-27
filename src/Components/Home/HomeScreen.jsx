import React from "react";
import TopNavbar from "../Utility/TopNavbar";

import Banner from "./Banner";
import Content from "./Content";
import ContentTV from "./ContentTV";
// import data1 from "../data/datatvshows.json";
import data1 from "../data/datamovies.json";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const [state, dispatch] = useContext(UserContext);
  let Navigate = useNavigate();

  function handlerDetail(e) {
    e.preventDefault(alert("Please Login"));
    Navigate("/");
  }
  // const [dataFilm, setDataFilm] = useState();
  // const [dataMovies, setDataMovies] = useState();

  let { data: films } = useQuery("filmsCacheAll", async () => {
    const response = await API.get("/film");
    return response.data.data;
  });

  // function getFilmByCategoryTV() {
  //   const newData = films?.filter((item) => {
  //     return item.category_id === "1";
  //   });
  //   setDataFilm(newData);
  //   // console.log(newData);
  // }

  // useEffect(() => {
  //   // if (films) getFilmByCategoryTV();
  // }, [films]);

  // function getFilmByCategoryMovie() {
  //   const newData = films?.filter((item) => {
  //     return item.category_id === "2";
  //   });
  //   setDataMovies(newData);
  //   // console.log(newData);
  // }

  // useEffect(() => {
  //   if (films) getFilmByCategoryMovie();
  // }, [films]);

  // console.log(dataFilm);
  let data = films;
  // console.log(data);

  return (
    <div className="app">
      <TopNavbar />
      {/* <Banner data={data1} /> */}
      <Banner data={data1} />
      <ContentTV category="TV Shows" />
      <Content category="Movies" />
    </div>
  );
}

export default HomeScreen;
