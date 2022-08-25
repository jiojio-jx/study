import React, { useState } from 'react';
import { Tabs, Card } from 'antd';

import Schema from './schema/Schema';
import FormilyAntd from '../formilyAntd'
const { TabPane } = Tabs;

const TAB_KEY_MAP = {
  Counter: {
    key: 'Counter',
    tabName: '全局状态管理',
  },
  ADD_CONTRACT: {
    key: 'ADD_CONTRACT',
    tabName: '添加对接人',
  },
};

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>(TAB_KEY_MAP.ADD_CONTRACT.key);

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Card>
      <Tabs activeKey={activeTab} onChange={onChange} tabPosition="left">
        <TabPane tab={TAB_KEY_MAP.ADD_CONTRACT.tabName} key={TAB_KEY_MAP.ADD_CONTRACT.key}>
          <Schema />
        </TabPane>

        <TabPane tab={TAB_KEY_MAP.Counter.tabName} key={TAB_KEY_MAP.Counter.key}>
          <FormilyAntd />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Home;
