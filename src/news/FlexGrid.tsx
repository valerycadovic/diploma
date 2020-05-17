/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useState, useEffect, Fragment } from 'react';
import { FlexGridItem } from './FlexGridItem';
import { NewsGridItemData, getGridNews } from './NewsGridItemData';
import { flexGridStyle } from './NewsGrid.style';
import { Loading } from '../core/Loading';
import { StyledLink } from '../header/StyledLink';

interface Props {
  tag: string;
}

export const FlexGrid: FC<Props> = ({ tag }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [news, setNews] = useState<NewsGridItemData[]>();

  useEffect(() => {
    const doAsync = async (): Promise<void> => {
      setLoading(true);

      const result = await getGridNews(tag);
      setNews(result);

      setLoading(false);
    };

    doAsync();
  }, [tag]);

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
                  <StyledLink to={`/news/${item.id}`}>
                    <FlexGridItem data={item} />
                  </StyledLink>
                ))}
            </section>
            <section className="column">
              {news
                ?.filter((item) => !item.isUrgent)
                .map((item) => (
                  <StyledLink to={`/news/${item.id}`}>
                    <FlexGridItem data={item} />
                  </StyledLink>
                ))}
            </section>
          </Fragment>
        )}
      </main>
    </div>
  );
};
