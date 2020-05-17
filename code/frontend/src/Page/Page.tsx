/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FlexGrid } from '../news/FlexGrid';

interface RouteProps {
  name: string;
}

export const Page: FC<RouteComponentProps<RouteProps>> = ({ match }) => {
  return (
    <div>
      <FlexGrid tag={match.params.name} />
    </div>
  );
};
