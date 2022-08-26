import { observer } from '@formily/react';
import { observable, autorun } from '@formily/reactive';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import ChildButton from './ChildButton';

/**
 * 全局数据状态管理 mobx、redux、redux-logger、Pinia（vue3）
 * - state、action 方法管理
 * - dispatch 执行 action， 更新数据 与 UI
 *
 * 那么在表单场景下
 * - 管理多表单数据：多表单联动、删除｜修改｜增加｜更新
 * - 管理表单事件触发、需要批量事件通知其他表单模块数据、进行数据更新
 *
 * 即多表单的数据抽象管理、就是一个发布-订阅模式
 * - 在get阶段进行依赖收集
 * - 在set阶段发布时间、批量更新
 *
 * - 倾听 set 操作
 *  - observable
 *  - observable.ref
 *  - observable.box
 *  - 预发糖
 *    - action
 *    - define
 *    - model
 *
 * - 收集 get 操作、自动触发
 *  - autorun
 *  - computed
 *  - reaction
 *  - tracker
 *  - observe
 *
 * - 批量触发
 *  - batch
 *  - batch.scope
 */

let data = observable({
  open: true,
  buttons: [0],
});

export default observer(() => {
  console.log('Parent Render');
  return (
    <div>
      <div>
        <button
          key="add"
          onClick={() => {
            data.buttons.push(data.buttons.length + 1);
          }}>
          添加一个
        </button>
        <button
          key="clear"
          onClick={() => {
            data.buttons = [];
          }}>
          清除
        </button>
        <button
          key="other"
          onClick={() => {
            data.open = !data.open;
          }}>
          状态：{data.open ? '打开' : '关闭'}
        </button>
      </div>
      {data.buttons.map(id => {
        return <ChildButton key={id} name={'按钮' + id} mode={'fish'} />;
      })}
    </div>
  );
});
