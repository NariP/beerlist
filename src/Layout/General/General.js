import { Layout } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../RootTheme';

const General = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  // fixme: toggle theme 사용 예제
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Layout>
      <Header onClick={() => toggleTheme(theme)}>헤더</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default General;
