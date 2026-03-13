import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Explore from "./pages/Explore";
import Movie_Details from "./pages/Movie_Details";
import Movie_Streaming from "./pages/Movie_Streaming";
import Footer from "./components/Footer";
import Page_Not_Found from "./pages/Page_Not_Found";
import Genre_List from "./components/Genre_List";

export const Context_API = createContext();

function App() {

  const [movies_collection, set_movies_collection] = useState([]);

  useEffect(() => {
    axios.get("https://hitarthpathak.github.io/Free-API/Movies-Collection.json")
      .then((response) => {
        set_movies_collection(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Movies Collection:", error);
      });
  }, []);

  return (

    <>

      <Context_API.Provider value={{ movies_collection }}>

        <Navbar />

        <Routes>

          <Route path="/" element={

            <>

              <Genre_List />

              <Home />

            </>

          } />

          <Route path="/search/query/:query" element={

            <>

              <Genre_List />

              <Search />

            </>

          } />

          <Route path="/search/query/:query/genre/:genre" element={

            <>

              <Genre_List />

              <Search />

            </>

          } />

          <Route path="/explore/genre/:genre" element={

            <>

              <Genre_List />

              <Explore />

            </>

          } />

          <Route path="/movie-details/:movie_id" element={<Movie_Details />} />

          <Route path="/movie-streaming/:movie_id" element={<Movie_Streaming />} />

          <Route path="*" element={<Page_Not_Found />} />

        </Routes>

        <Footer />

      </Context_API.Provider>

    </>

  );

};

export default App;