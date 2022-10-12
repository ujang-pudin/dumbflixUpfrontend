import React from "react";
import TopNavbar from "../Utility/TopNavbar";
import Banner from "./Banner";
import Content from "./Content";
import ContentTV from "./ContentTV";
import data1 from "../data/datamovies.json";

function HomeScreen() {
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
