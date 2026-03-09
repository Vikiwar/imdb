import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import WatchListContextWrapper from "./context/WatchListContext";
import { Provider } from "react-redux";
import Store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={Store}>
        <NavBar />
        <WatchListContextWrapper>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watchlist" element={<WatchList />}></Route>
          </Routes>
        </WatchListContextWrapper>
      </Provider>
    </>
  );
}

export default App;
