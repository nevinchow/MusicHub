/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const TopBar = ({children}) => (
  <div className="TopBar" css={CSS}>
    {children}
  </div>
);

const CSS = css``;

export default TopBar;
