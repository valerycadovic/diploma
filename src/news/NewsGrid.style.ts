/** @jsx jsx */
import { css } from '@emotion/core';

export const newsGridStyles = css`
  .row {
    background-color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: azure;
  }

  .row:after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const newsGridItemStyle = css`
  .column {
    float: left;
    width: 32%;
    height: 450px;
    text-align: justify;
    margin-bottom: 10px;
    padding: 8px;
    overflow: hidden;
    :hover {
      cursor: pointer;
      opacity: 80%;
      color: orange;
    }
  }

  .content {
    width: 400px;
    height: 300px;
    border-style: 3px;
    background-position: center;
  }
`;
