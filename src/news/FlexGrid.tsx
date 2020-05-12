/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC, useState, useEffect, Fragment } from 'react';
import { FlexGridItem } from './FlexGridItem';
import { NewsGridItemData, getGridNews } from './NewsGridItemData';
import { flexGridStyle } from './NewsGrid.style';
import { Loading } from '../core/Loading';

export const FlexGrid: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<NewsGridItemData[]>();

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
    <div css={flexGridStyle}>
      <main className="main columns">
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <Fragment>
            <section className="column main-column">
              {news
                ?.filter((item) => item.isUrgent)
                .map((item) => (
                  <FlexGridItem data={item} />
                ))}
            </section>
            <section className="column">
              {news
                ?.filter((item) => !item.isUrgent)
                .map((item) => (
                  <FlexGridItem data={item} />
                ))}
            </section>
          </Fragment>
        )}
      </main>
    </div>
  );
};
