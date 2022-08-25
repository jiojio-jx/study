import React from 'react';
import {
  FormItem,
  Input,
  Editable,
  Select,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
} from '@formily/antd';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    DatePicker,
    Editable,
    Space,
    Input,
    Select,
    ArrayItems,
  },
});

const form = createForm();

export default () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Array name="array" title="array" x-decorator="FormItem" x-component="ArrayItems">
          <SchemaField.Void x-component="Space">
            <SchemaField.String x-decorator="FormItem" required name="input" x-component="Input" />
          </SchemaField.Void>
          <SchemaField.Void x-component="ArrayItems.Addition" title="Add entry" />
        </SchemaField.Array>
      </SchemaField>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};
