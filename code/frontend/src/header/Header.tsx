/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, useState, useEffect } from 'react';
import { topMenuCss } from './Header.style';
import { StyledLink } from './StyledLink';
import { TopItem, getHeaderData } from './HeaderData';

export const Header: FC = () => {
  const [headerData, setHeaderData] = useState<TopItem[]>();

  useEffect(() => {
    const result = getHeaderData();
    setHeaderData(result);
  }, [headerData]);

  return (
    <div css={topMenuCss}>
      <nav>
        <ul className="topmenu">
          {headerData &&
            headerData.map((item) => (
              <li>
                {item.id && (
                  <StyledLink to={`/page/${item.id}`}>
                    <span>{item.text}</span>
                  </StyledLink>
                )}
                {item.subItems && (
                  <div>
                    <span>{item.text}</span>
                    <ul className="submenu">
                      {item.subItems.map((subItem) => (
                        <li>
                          <StyledLink to={`/page/${subItem.id}`}>
                            <span>{subItem.text}</span>
                          </StyledLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
