import React from "react";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import "./index.css";

const App = () => {
  return (
    <div>
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full w-full fixed overflow-hidden">
            <Header />
            <Routes>
              <Route exact path="/" element={<Feed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult/>}
              />
              <Route path="/video/:id" element={<VideoDetail/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </div>
  );
};

export default App;
