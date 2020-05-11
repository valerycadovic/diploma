/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import { NewsGridItemData } from './NewsGridItemData';
import { newsGridItemStyle } from './NewsGrid.style';

interface Props {
  item: NewsGridItemData;
}

export const NewsGridItem: FC<Props> = ({ item }) => {
  return (
    <div css={newsGridItemStyle}>
      <div className="column">
        <div
          className="content"
          css={css`
            background-image: url(${item.image});
          `}
        ></div>
        <h4>{item.header}</h4>
        <p>{item.text.length > 100 ? `${item.text.slice(0, 99)} ...` : item.text}</p>
      </div>
    </div>
  );
};
