import React from 'react';
import { Card } from 'antd';
import { Counter } from '@/store/Counter';
import { createForm } from '@formily/core';
import { Tabs } from 'antd';
import LoginJsxFormily from './login_jsx_formily';
import LoginJsonFormily from './login_json_formily';

const { TabPane } = Tabs;

export default function index() {

  return (
    <Card>
      <Tabs tabPosition="left">
        <TabPane tab="全局状态管理" key="1">
          <Counter />
        </TabPane>
        <TabPane tab="JSX formily" key="2">
          <LoginJsxFormily />
        </TabPane>
        <TabPane tab="JSON formily" key="3">
          <LoginJsonFormily />
        </TabPane>
      </Tabs>
    </Card>
  );
}
