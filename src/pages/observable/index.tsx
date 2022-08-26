import { observable, autorun } from '@formily/reactive';
import { Button } from 'antd';
import React, { useEffect } from 'react';

/** 学习、理解 @formily/reactive
 * 如何集中管理表单数据
 * - 集中管理数据
 * - 管理表单路径、多表单联动
 */

// 创建 监听对象
const obs = observable({
  aa: 11,
  bb: 22,
});

// 监听 数据变化
autorun(() => {
  console.log(obs.aa);
});

const Index = () => {
  useEffect(() => {
    // 计算属性缓存
    const computed = observable.computed(() => obs.aa + obs.bb);
    console.log('===>', computed.value);
  }, []);

  const dispose = () => {
    obs.aa++;
  };

  return <Button onClick={dispose}>打印</Button>;
};

export default Index;
