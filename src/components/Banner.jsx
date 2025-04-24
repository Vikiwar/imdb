import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [bannerTitle, setBannerTitle] = useState("placeHolder Title");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=7c1c2e5060817268146ba228bac06cc0&language=en-US&page=1"
      )
      .then((res) => {
        console.log(res.data.results[0]);
        const firstmovie = res.data.results[0];
        const firstmovieTitle = firstmovie.title;
        const firstmovieImage = `https://image.tmdb.org/t/p/w1280/${firstmovie.backdrop_path}`;
        setBannerTitle(firstmovieTitle);
        setBannerImage(firstmovieImage);
      });
  }, []);
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end
    "
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {bannerTitle}
      </div>
    </div>
  );
};

export default Banner;
