import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

import { fetchDataFromApi } from "../utilities/api";

export const myContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoriesData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoriesData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
