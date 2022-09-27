import ContentMoviesAdmin from "../AdminHome/ContentMovies";
import ContentTVAdmin from "../AdminHome/ContentTVAdmin";
import TopNavbarAdmin from "../Utility/TopNavAdmin";
import React, { useState, useEffect } from "react";
import ButtonModalAddFilm from "../AddFilm/ButtonModalAddFilm";
import { useQuery } from "react-query";
import { API } from "../../config/api";

function AddListPage() {
  const [category, setCategory] = useState("category");
  const [allCategory, setAllCategory] = useState("allCategory");

  // Fetching product data from database
  // let { data: films } = useQuery("filmsCache", async () => {
  //   const response = await API.get("/film");
  //   return response.data.data;
  // });

  let { data: categoryName } = useQuery("categoryCache", async () => {
    const response = await API.get("/category");
    return response.data.data;
  });

  // console.log({ ...films });
  console.log(category);
  useEffect(() => {
    setAllCategory("allCategory");
  }, [category]);

  return (
    <div className="app">
      <TopNavbarAdmin />

      <div className="row mt-5 px-5">
        <div className="col d-flex">
          <div className="pe-5">
            <h4>List Film</h4>
          </div>
          <select
            className="bg-dark text-white px-3"
            aria-label="Default select example"
            value={category}
            onChange={(e) => setCategory(() => e.target.value)}
            style={{ borderRadius: "50px solid", backgroundColor: "none" }}
          >
            <option
              value={allCategory}
              category={allCategory}
              onChange={(e) => (setCategory = () => e.target.value)}
            >
              All
            </option>
            {categoryName?.map((item) => (
              <option value={item?.name}>{item?.name}</option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <ButtonModalAddFilm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {category === "TV Shows" ? (
            <ContentTVAdmin category="TV Shows" />
          ) : category === "Movies" ? (
            <ContentMoviesAdmin category="Movies" />
          ) : (
            <div category="allCategory">
              <ContentTVAdmin category="TV Shows" />
              <ContentMoviesAdmin category="Movies" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddListPage;
