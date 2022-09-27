import React, { Component } from "react";
// import Content from "../Home/Content";
import TopNavbar from "../Utility/TopNavbar";
import BannerTv from "./BannerTv";
import data from "../data/datatvshows.json";
import ContentTV from "../Home/ContentTV";
import { useQuery } from "react-query";
import { useState } from "react";
import { API } from "../../config/api";

function TVShows() {
  const [dataFilm, setDataFilm] = useState();

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/film");
    return response.data.data;
  });

  return (
    <div className="app">
      <TopNavbar />
      <BannerTv data={data} />
      <ContentTV category="TV Show" data={data} />
    </div>
  );
}

export default TVShows;
