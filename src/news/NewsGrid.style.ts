/** @jsx jsx */
import { css } from '@emotion/core';

export const flexItemStyle = css`
  .article {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-basis: auto;
    background: white;
    color: #666;
    margin: 10px;
    text-decoration: none;
    :hover:not(:active) {
      opacity: 90%;
    }
    :hover {
      cursor: pointer;
    }
  }

  .article-image {
    background: #eee;
    display: block;
    height: 75%;
    position: relative;
    width: 100%;
  }

  .article-image img {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .article-image.is-3by2 {
    padding-top: 66.6666%;
  }

  .article-image.is-16by9 {
    padding-top: 56.25%;
  }

  .article-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;
  }

  .article-title {
    color: #333;
    flex-shrink: 0;
    font-size: 1.4em;
    font-weight: bold;
    font-weight: 700;
    line-height: 1.2;
  }

  .article-content {
    flex: 1;
    margin-top: 5px;
  }

  .article-info {
    display: flex;
    font-size: 0.85em;
    justify-content: space-between;
    margin-top: 10px;
  }

  div,
  h2,
  p,
  figure {
    margin: 0;
    padding: 0;
  }
`;

export const flexGridStyle = css`
  .columns {
    display: flex;
    font-family: sans-serif;
    font-size: 14px;
  }

  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .main-column {
    flex: 2;
  }

  .main {
    margin: 0 auto;
    max-width: 1040px;
    padding: 20px;
  }
`;
