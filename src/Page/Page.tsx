/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { NewsGrid } from '../news/NewsGrid';

interface RouteProps {
  name: string;
}

export const Page: FC<RouteComponentProps<RouteProps>> = ({ match }) => {
  return (
    <div>
      {match.params.name}
      <NewsGrid />
    </div>
  );
};
