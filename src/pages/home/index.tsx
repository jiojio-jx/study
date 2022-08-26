import React, { useState } from 'react';
import { Tabs, Card } from 'antd';

import Schema from './schema/Schema';
import FormilyAntd from '../formilyAntd'
import Observable from '../observable'
import FormCol from '../formCol'


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
  Observable: {
    key: 'Observable',
    tabName: 'react-observable',
  },
  FormCol: {
    key: 'FormCol',
    tabName: 'FormCol',
  },
};

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>(TAB_KEY_MAP.Observable.key);

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
        <TabPane tab={TAB_KEY_MAP.Observable.tabName} key={TAB_KEY_MAP.Observable.key}>
          <Observable />
        </TabPane>
        <TabPane tab={TAB_KEY_MAP.FormCol.tabName} key={TAB_KEY_MAP.FormCol.key}>
          <FormCol />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Home;
