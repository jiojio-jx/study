import React from 'react';
import { Card } from 'antd';
import { Counter } from '@/store/Counter';
import { Tabs } from 'antd';
import Schema from './Schema'
const { TabPane } = Tabs;

export default function index() {
  return (
    <Card>
      <Tabs tabPosition="left">
        <TabPane tab="ArraryField" key="4">
          <Schema/>
        </TabPane>
        <TabPane tab="全局状态管理" key="1">
          <Counter />
        </TabPane>
      </Tabs>
    </Card>
  );
}
