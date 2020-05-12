/** @jsx jsx */
import { css } from '@emotion/core';

export const topMenuCss = css`
  nav {
    margin: 0 auto 30px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: black;
  }

  .topmenu > li {
    display: inline-block;
    position: relative;
    padding: 10px;
    padding-right: 20;
    :hover {
      background-color: black;
    }
  }

  .topmenu > li:last-child {
    margin-right: 20px;
  }

  span {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    outline: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .submenu {
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;
    display: none;
    background: black;
  }

  ul span {
    color: white;
  }

  ul li:hover .submenu {
    display: block;
  }

  .submenu li {
    :hover {
      background-color: orange;
      opacity: 100%;
      cursor: pointer;
    }
  }
`;
