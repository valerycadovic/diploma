/** @jsx jsx */
import { jsx } from '@emotion/core';
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
          <p className="article-content">{data.listViewContent}</p>
          <footer className="article-info">
            <span>{`By ${data.createdBy}`}</span>
            <span>{`${data.createdOn.toLocaleDateString()} ${data.createdOn.toLocaleTimeString()}`}</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
