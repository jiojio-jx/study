## 自定义脚手架

- 二级路由、懒加载
- webPack 自定义配置
- 使用 redux-logger 全局状态管理

https://blog.51cto.com/u_15127534/4898179
https://blog.csdn.net/weixin_44135121/article/details/109850564

## 学习 formily 表单框架
- ./formily.md
- 实现方式
  - JSx
  - Schema
  - Json

## 1 JSX Field 组件

- Field 组件就像我们原来的用法，在 component 属性写入组件，就能实现自定绑定组件了
  <Field
  name="password"
  decorator={[FormItem]}
  component={[Password,。
  { placeholder: 'Please Input Password' }]}
  />

## 2 JSX ObjectField 容器

- 批量管理字段 容器
- 获取数据 person{ name, age }
  <ObjectField name="person" title="个人信息" component={[Card, {}]}>
  <Field
  name="name"
  title="姓名"
  required={true}
  component={[Input, {}]}
  decorator={[FormItem, {}]}
  />
  <Field
  name="age"
  title="年龄"
  required={true}
  component={[NumberPicker, {}]}
  decorator={[FormItem, {}]}
  />
  </ObjectField>

## 3 voidField 组件

## 4 ArrayField 组件
