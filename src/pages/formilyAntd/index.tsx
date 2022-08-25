import React, { useEffect } from 'react';
import { FormItem, Input, ArrayCards, FormButtonGroup, Submit } from '@formily/antd';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Input as AInput } from 'antd';

const CustomUpload = ({ onChange, tags, ...rest }: any) => {
  console.log(tags);
  console.log(rest);

  const handleChange = data => {
    onChange(data.target.value);
  };
  return <AInput onChange={handleChange} />;
};

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    ArrayCards,
    CustomUpload,
  },
});

const form = createForm();

const FormilyAntd = () => {
  useEffect(() => {
    form.setInitialValues({
      vendors: [
        {
          name: 'shannZheng',
          phone: '1830663',
          email: '163@.com',
        },
      ],
    });
  }, []);

  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array
          name="vendors"
          x-decorator="FormItem"
          x-component="ArrayCards"
          x-component-props={{
            title: '对象数组',
          }}>
          <SchemaField.Object>
            <SchemaField.Void x-component="ArrayCards.Index" />
            <SchemaField.String x-decorator="FormItem" x-component="Input" title="姓名" name="name" required />
            <SchemaField.String x-decorator="FormItem" x-component="Input" title="手机号码" name="phone" required />
            <SchemaField.String x-decorator="FormItem" x-component="Input" title="邮箱" name="email" required />
            <SchemaField.Void x-component="ArrayCards.Remove" />
            <SchemaField.Void x-component="ArrayCards.MoveUp" />
            <SchemaField.Void x-component="ArrayCards.MoveDown" />
          </SchemaField.Object>
          <SchemaField.Void x-component="ArrayCards.Addition" title="添加条目" />
        </SchemaField.Array>
        <SchemaField.String
          x-decorator="FormItem"
          x-component="CustomUpload"
          x-component-props={{
            tags: 2,
          }}
          title="自定义组件"
          name="image"
          required
        />
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};

export default FormilyAntd;
