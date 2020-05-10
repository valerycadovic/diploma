/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteProps {
  name: string;
}

export const Page: FC<RouteComponentProps<RouteProps>> = ({ match }) => {
  return <div>{match.params.name}</div>;
};
