/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { gridNews } from './NewsGridItemData';
import { NewsGridItem } from './NewsGridItem';
import { newsGridStyles } from './NewsGrid.style';

export const NewsGrid: FC = () => {
  return (
    <div css={newsGridStyles}>
      <div className="row">
        {gridNews.map((item) => (
          <NewsGridItem item={item} />
        ))}
      </div>
    </div>
  );
};
