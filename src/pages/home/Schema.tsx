import React, { useState, useEffect } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@formily/antd';
import { action } from '@formily/reactive';
import { Card, Button, Spin, Radio, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';

const form = createForm({
  validateFirst: true,
});

/* 自定义 component */
const CustomComponent = props => {
  const { onChange } = props;
  const value = JSON.parse(JSON.stringify(props.value));
  console.log(value);

  const handleChange = (data, type, index) => {
    console.log(data, type);

    if (type === 'input') {
      value[index].input = data;
    } else {
      value[index].datePicker = data;
    }
    onChange(value);
  };

  const addItemClick = () => {
    value.push({ datePicker: '', input: '' });
    onChange(value);
  };

  return (
    <>
      <Row>
        <Button onClick={addItemClick}>新增</Button>
      </Row>
      {value instanceof Array ? (
        <Card style={{ marginTop: 20 }}>
          {value.map((item, index) => (
            <Row key={index} gutter={16} style={{ marginTop: 10 }}>
              <Col span={12}>
                <Input defaultValue={item.input} onChange={e => handleChange(e.target.value, 'input', index)} />
              </Col>
              <Col span={12}>
                <DatePicker
                  defaultValue={item.date}
                  style={{ width: '100%' }}
                  onChange={value => handleChange(value, 'date', index)}
                />
              </Col>
            </Row>
          ))}
        </Card>
      ) : null}
    </>
  );
};

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    ArrayItems,
    Editable,
    CustomComponent,
  },
});

export default () => {
  useEffect(() => {
    form.setInitialValues({
      artwork: [
        { datePicker: '2022-05-17', input: '111' },
        { datePicker: '2022-05-20', input: '222' },
      ],
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}>
      <Card title="编辑用户" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={form => {
            console.log(form);
          }}>
          <SchemaField>
            <SchemaField.String name="username" title="用户名" required x-decorator="FormItem" x-component="Input" />

            <SchemaField.String
              name="email"
              title="邮箱"
              required
              x-validator="email"
              x-decorator="FormItem"
              x-component="Input"
            />

            <SchemaField.Object
              name="artwork"
              title="添加参演艺人"
              required
              x-decorator="FormItem"
              x-component="CustomComponent"
            />
          </SchemaField>

          <FormButtonGroup.FormItem>
            <Submit block size="large">
              提交
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  );
};
