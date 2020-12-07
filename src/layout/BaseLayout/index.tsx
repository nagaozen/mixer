import { useState } from 'react';
import Link from 'next/link';

import menuData from '@/components/SidebarData';

import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

const BaseLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(collapsed: boolean) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <h1 style={{ color: '#fff' }}>Projeto</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {menuData.map(item => (
            <Menu.Item key={item.id}>
              <Link href={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Content style={{ padding: '24px' }}>{children}</Content>
    </Layout>
  );
};

export default BaseLayout;
