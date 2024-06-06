import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utilities/api";
import { myContext } from "../context/ContextApi";
import Sidebar from "./Sidebar";
import SearchResultVideoPage from "./SearchResultVideoPage";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(myContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result.length > 0 &&
            result.map((item) => {
              if (item?.type !== "video") return null;
              let video = item?.video;
              return (
                <SearchResultVideoPage key={video?.videoId} video={video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
