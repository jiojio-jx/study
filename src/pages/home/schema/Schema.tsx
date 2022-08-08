import React, { useEffect } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider } from '@formily/react';
import {
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
import { Card, Button, Row } from 'antd';
import styles from './schema.module.less';

// 查看 form 源码路径：/node_modules/@formily/core/esm/models/Form.d.ts

// 创建表单内核
const form = createForm({
  validateFirst: true,
});

// 对接人默认信息
const DEFAULT_BLOCKER = {
  name: '',
  email: '',
  phone: '',
  remark: '',
};

// 对接人信息表单操作标识符
enum BLOCKER_TYPE {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
}

enum LABEL_MAP {
  name = '姓名',
  email = '邮箱',
  phone = '手机号',
  remark = '备注',
}

/* 自定义 component */
/* 不符合 formily 框架思想 */
const CustomComponent = props => {
  const { onChange } = props;
  const value = JSON.parse(JSON.stringify(props.value));
  console.log(value);

  const handleValueChange = (data, type, index) => {
    value[index][type] = data;
    // 上传数据
    onChange(value);
  };

  const handleDeleteChange = index => {
    // 删除数据
  };

  // 添加一个模块
  const handleAddItemClick = () => {
    value.push(
      Object.assign(DEFAULT_BLOCKER, {
        status: BLOCKER_TYPE.ADD,
      })
    );

    onChange(value);
  };

  // 修改
  const handleUpdateClick = index => {
    value[index] = Object.assign(value[index], {
      status: BLOCKER_TYPE.UPDATE,
    });

    onChange(value);
  };

  return (
    <>
      <Row>
        <Button onClick={handleAddItemClick}>新增</Button>
      </Row>

      {value instanceof Array ? (
        <Card style={{ marginTop: 20 }}>
          {value.map((item, index) => {
            return (
              <div className={styles.docker_wrapper}>
                <div className={styles.header}>
                  <span className={styles.tag}>对接人1</span>
                  <div>
                    <span className={styles.edit} onClick={() => handleUpdateClick(index)}>
                      修改
                    </span>
                    <span className={styles.delete} onClick={() => handleDeleteChange(index)}>
                      删除
                    </span>
                  </div>
                </div>
                <div>
                  {[BLOCKER_TYPE.ADD, BLOCKER_TYPE.UPDATE].includes(item?.status) &&
                    Object.keys(item).map(key => {
                      return (
                        LABEL_MAP[key] && (
                          <>
                            <span>{LABEL_MAP[key]}：</span>
                            {/* 为什么这里的Input 没有办法继承表单属性 */}
                            <Input
                              key={key + index}
                              defaultValue={item[key]}
                              onChange={e => handleValueChange(e.target.value, key, index)}
                            />
                          </>
                        )
                      );
                    })}
                </div>
                <div>
                  {![BLOCKER_TYPE.ADD, BLOCKER_TYPE.UPDATE].includes(item?.status) &&
                    Object.keys(item).map(key => {
                      return (
                        LABEL_MAP[key] && (
                          <div>
                            <span>{LABEL_MAP[key]}：</span>
                            <span>{item[key]}</span>
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
            );
          })}
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
        {
          id: 1,
          name: '彭于晏',
          email: '18306638509@163.com',
          phone: '18306638509',
          remark: '',
        },
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
        {/* formily/antd 的 Form 已集成 FormProvider */}
        {/* 若是使用 @formily/react 则需要使用 FormProvider*/}
        {/* 
        * FormProvider 组件
          - 是作为视图层桥接表单模型的入口
          - 只有一个参数、接受 createForm 创建出来的 From 实例
          - 并将实例以上下文形式传递到子组件中
        */}
        <FormProvider form={form}>
          {/* 
            * Filed 组件t
              - 接收普通字段的组件
          */}
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

            <SchemaField.Array
              name="artwork"
              title="添加对接人"
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
        </FormProvider>
      </Card>
    </div>
  );
};
