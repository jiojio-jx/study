import React from 'react';
import { Card } from 'antd';
import { Counter } from '@/store/Counter';

import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import { FormItem, FormLayout, Input, FormButtonGroup, Submit } from '@formily/antd';

import styles from './re.module.less';

export default function index() {
  const form = createForm();

  return (
    <Card>
      <div className={styles.color}>home......ßß</div>
      <Counter />
      {/* <Card>
        <FormProvider form={form}>
          <FormLayout layout="vertical">
            <Field
              name="input"
              title="输入框"
              required
              initialValue="Hello world"
              decorator={[FormItem]}
              component={[Input]}
            />
          </FormLayout>
          <FormConsumer>
            {() => (
              <div
                style={{
                  marginBottom: 20,
                  padding: 5,
                  border: '1px dashed #666',
                }}>
                实时响应：{form.values.input}
              </div>
            )}
          </FormConsumer>
          <FormButtonGroup>
            <Submit onSubmit={console.log}>提交</Submit>
          </FormButtonGroup>
        </FormProvider>
      </Card> */}
    </Card>
  );
}
