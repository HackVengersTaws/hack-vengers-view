import React from 'react';
import Mapa from './mapa/Mapa';
import Menu from './menu/Menu';
import { Layout,  } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './App.css';
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <Layout>
      <Menu/>
      <Mapa/>
    </Layout>
  );
}

export default App;
