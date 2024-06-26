import React, { useContext, useEffect } from "react";

import { myContext } from "../context/ContextApi";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(myContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item) => {
              if (item?.type !== "video" || item?.video?.isLiveNow === "true") {
                return null;
              }
              return (
                <VideoCard key={crypto.randomUUID()} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
