import { Layout } from 'antd';

const General = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>헤더</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default General;
