import { css } from "@emotion/css";
import React from "react";
import search from "../assets/search-eye-line.svg";

const SerchInput = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <img
        src={search}
        alt="Search icon"
        className={css`
          width: 100px;
          margin: 40px auto;
        `}
      />
      <input
        className={css`
          padding: 16px 32px;
          font-size: 20px;
          border: 1px solid #e4e4e4;
          border-radius: 32px;

          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          width: 100%;
          transition: 0.1s;
          &:focus {
            outline: none;
            border: 1px solid #c5c5c5;
          }
          &:active {
            outline: none;
          }
        `}
        placeholder="Search..."
        type="text"
      />
    </div>
  );
};

export default SerchInput;
