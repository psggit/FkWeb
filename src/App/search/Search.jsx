import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Layout from "../Layout/Layout";

function Search() {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const cancelEnable = (val) => {
    SetCancelBtn(val);
  };
  useEffect(() => {
    window.addEventListener("focusout", () => {
      SetCancelBtn(false);
    });
  });
  return (
    <>
      <div>Search</div>
      <div className="search-container">
        <SearchBox cancelEnable={cancelEnable} />
        {cancelBtn ? <button>Cancel</button> : ""}
      </div>
      <Layout>
      <div className="search-child">
    <h6>What are you looking for today?</h6>
    <p>We'll tell you where <br/>
it's available!</p>
    </div>
      </Layout>
    </>
  );
}

export default Search;
