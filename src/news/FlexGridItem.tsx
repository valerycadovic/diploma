/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import { NewsGridItemData } from './NewsGridItemData';
import { flexItemStyle } from './NewsGrid.style';

interface Props {
  data: NewsGridItemData;
}

export const FlexGridItem: FC<Props> = ({ data }) => {
  const imageClassName = `article-image is-${data.isUrgent ? '16by9' : '3by2'}`;

  return (
    <div css={flexItemStyle}>
      <div className="article article-clickable">
        <figure className={imageClassName}>
          <img src={data.image} alt={data.header} />
        </figure>
        <div className="article-body">
          <h2 className="article-title">{data.header}</h2>
          <p className="article-content">{data.text}</p>
          <footer className="article-info">
            <span>{data.itemInfo && `By ${data.itemInfo.userName}`}</span>
            <span>{data.itemInfo && `${data.itemInfo.commentsCount} comments`}</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
