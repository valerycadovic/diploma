/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

export const StyledLink: FC<Props> = ({ children, to }) => {
  return (
    <Link
      css={css`
        text-decoration: none;
      `}
      to={to}
    >
      {children}
    </Link>
  );
};
