import { css } from "@emotion/css";
import React from "react";
import BrowserBar from "../components/BrowserBar";
import SearchInput from "../components/SerchInput";

const Frontstage = () => {
  return (
    <div>
      <BrowserBar />
      <div
        className={css`
          max-width: 500px;
          margin: 20vh auto 30vh auto;
        `}
      >
        <SearchInput />
      </div>
    </div>
  );
};

export default Frontstage;
