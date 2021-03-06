import React, { useContext } from 'react';
import { Layout, Switch } from 'antd';
import { ThemeContext } from '../../RootTheme';
import { NavLink } from 'react-router-dom';
import { PATH_PAGE } from 'routes';
import { BsMoonStarsFill, BsFillEmojiSunglassesFill } from 'react-icons/bs';
import { THEME_MODE } from 'utils/constatns';
import styled from 'styled-components';

const General = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  const { themeName, toggleTheme } = useContext(ThemeContext);

  function onChange(checked) {
    toggleTheme(themeName);
  }
  return (
    <GeneralLayout className="layout">
      <Header className="general-header">
        <img src="/static/logo.png" alt="logo" />
        <RightLayout>
          <Menu>
            {MENUS.map(({ name, to }) => {
              return (
                <NavLink key={to} to={to} activeClassName="selected">
                  <li>{name}</li>
                </NavLink>
              );
            })}
          </Menu>
          <ThemeToggler
            defaultChecked
            checked={themeName === THEME_MODE.LIGHT}
            onChange={onChange}
            checkedChildren={<BsFillEmojiSunglassesFill />}
            unCheckedChildren={<BsMoonStarsFill />}
          />
        </RightLayout>
      </Header>
      <Content className="general-content">{children}</Content>
      <Footer className="general-footer">
        Made By{' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/NariP">
          @nari park
        </a>
      </Footer>
    </GeneralLayout>
  );
};

const MENUS = [
  { name: '홈', to: PATH_PAGE.HOME },
  { name: '맥주 정보', to: PATH_PAGE.BEER_LIST },
  { name: '장바구니', to: PATH_PAGE.CART },
];

const GeneralLayout = styled(Layout)(({ theme }) => ({
  '.general-header': {
    backgroundColor: theme.color.bgColor,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px ${theme.color.normalAlpha}`,
    boxShadow: `0 3px 5px ${theme.color.normalAlpha}`,
    height: 64,
    zIndex: 100,
    position: 'sticky',
    top: 0,
    width: '100%',
  },
  '.general-content': {
    padding: '1rem',
    minHeight: 'calc(100vh - 64px - 69px)',
    backgroundColor: theme.color.secondaryBgColor,
  },
  '.general-footer': {
    backgroundColor: theme.color.bgColor,
    color: theme.color.secondaryText,
    borderTop: `1px ${theme.color.normalAlpha}`,
    height: 69,
    a: {
      color: theme.color.third,
    },
  },
}));
const RightLayout = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const Menu = styled.ul(({ theme }) => ({
  backgroundColor: 'none',
  display: 'flex',
  paddingLeft: 0,
  marginRight: '2em',
  a: {
    padding: '0 0.8em',
    color: theme.color.textColor,
    '&:hover': {
      color: theme.color.primary,
      cursor: 'pointer',
    },
  },
  '.selected': {
    color: theme.color.primary,
    borderBottom: `2px solid ${theme.color.primary}`,
  },
  li: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
const ThemeToggler = styled(Switch)(({ theme }) => ({
  '& > span ': {
    display: 'flex',
  },
  backgroundColor: theme.color.primary,
}));
export default General;
