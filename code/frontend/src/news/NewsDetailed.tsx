/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { flexItemStyle } from './NewsGrid.style';
import { NewsItemDetailedView, getDetailedNews } from './NewsGridItemData';
import { Loading } from '../core/Loading';
import ReactMarkdown from 'react-markdown';
import * as Disqus from 'disqus-react';

interface RouteParams {
  newsId: string;
}

const disqusShortName = 'futbol-naviny';

export const NewsDetailed: FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const [news, setNews] = useState<NewsItemDetailedView | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const disqusConfig = {
    url: `http://localhost:3000/${match.url}`,
    identifier: match.params.newsId,
    title: match.params.newsId,
  };

  useEffect(() => {
    const doAsync = async (): Promise<void> => {
      setLoading(true);

      const result = await getDetailedNews(match.params.newsId);
      setNews(result);

      setLoading(false);
    };

    doAsync();
  }, [match.params.newsId]);

  return (
    <div css={flexItemStyle}>
      <div
        css={css`
          display: flex;
        `}
      >
        {loading ? (
          <Loading>Loading...</Loading>
        ) : news === null || news === undefined ? (
          <span>News is nonexistent!</span>
        ) : (
          <div className="article">
            <figure className="article-image is-16by9">
              <img src={news.image} alt={news.id} />
            </figure>
            <div className="article-body">
              <h2 className="article-title">{news.header}</h2>
              <p className="article-content">
                <ReactMarkdown source={news.detailedViewContent} escapeHtml={false} />
              </p>
            </div>
            <div
              css={css`
                padding: 20px;
              `}
            >
              <Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} key={match.params.newsId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
