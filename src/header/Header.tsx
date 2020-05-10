/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { topMenuCss } from './Header.style';
import { StyledLink } from './StyledLink';
import { headerData } from './HeaderData';

export const Header: FC = () => {
  return (
    <div css={topMenuCss}>
      <nav>
        <ul className="topmenu">
          {headerData.map((item) => (
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

export const OldHeader: FC = () => {
  return (
    <div css={topMenuCss}>
      <nav>
        <ul className="topmenu">
          <li>
            <StyledLink to="/page/home">
              <span>Home</span>
            </StyledLink>
          </li>
          <li>
            <span>Belarus</span>
            <ul className="submenu">
              <li>
                <StyledLink to="/page/national-team">
                  <span>National Team</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/major-league">
                  <span>Major League</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/national-cup">
                  <span>National Cup</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/1st-division">
                  <span>1st Division</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/2nd-division">
                  <span>2nd Division</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/regional">
                  <span>Regional</span>
                </StyledLink>
              </li>
            </ul>
          </li>
          <li>
            <span> International Competitions</span>
            <ul className="submenu">
              <li>
                <StyledLink to="/page/ucl">
                  <span>UEFA Champions League</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/uel">
                  <span>UEFA Europa League</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/cwc">
                  <span>FIFA Club World Cup</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/urc">
                  <span>UEFA Regions Cup</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/other">
                  <span>Other</span>
                </StyledLink>
              </li>
            </ul>
          </li>
          <li>
            <span>National Teams</span>
            <ul className="submenu">
              <li>
                <StyledLink to="/page/euro2021">
                  <span>Euro 2021</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/unl">
                  <span>UEFA Nations League</span>
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/page/wc2022">
                  <span>FIFA World Cup 2022</span>
                </StyledLink>
              </li>
            </ul>
          </li>
          <li>
            <StyledLink to="/page/blogs">
              <span>Blogs</span>
            </StyledLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
