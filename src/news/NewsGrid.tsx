/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { getGridNews, NewsGridItemData } from './NewsGridItemData';
import { NewsGridItem } from './NewsGridItem';
import { newsGridStyles } from './NewsGrid.style';

export const NewsGrid: FC = () => {
  const [news, setNews] = useState<NewsGridItemData[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const doAsync = async (): Promise<void> => {
      setLoading(true);

      const result = await getGridNews();
      setNews(result);

      setLoading(false);
    };

    doAsync();
  }, [news]);

  return (
    <div css={newsGridStyles}>
      {loading ? (
        <div className="loading">Load News...</div>
      ) : (
        <div className="row">{news && news.map((item) => <NewsGridItem item={item} />)}</div>
      )}
    </div>
  );
};
