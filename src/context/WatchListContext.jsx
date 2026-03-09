import { Children, createContext, useEffect, useState } from "react";

const WatchListContext = createContext();

export default function WatchListContextWrapper({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addTowatchlist = (movieobj) => {
    const updatedWatchlist = [...watchlist, movieobj];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movieobj) => {
    const filteredList = watchlist.filter((movie) => movie.id != movieobj.id);
    setWatchlist(filteredList);
    localStorage.setItem("movies", JSON.stringify(filteredList));
  };
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setWatchlist(movies);
    }
  }, []);

  return (
    <WatchListContext.Provider
      value={{ watchlist, setWatchlist, addTowatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export { WatchListContext };
