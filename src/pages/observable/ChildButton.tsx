import { observable } from '@formily/reactive';
import { observer } from '@formily/reactive-react';
import Button from 'antd/lib/button';
import React from 'react';
import { useState } from 'react';
import CounterStore, { CounterEnum } from './Store';

type Props = {
  name: string;
  mode: CounterEnum;
};

export default observer((props: Props) => {
  let [mode, setMode] = useState<{ value: CounterEnum }>(() => {
    return observable({
      value: props.mode,
    });
  });

  let counter = CounterStore.get(mode.value);
  console.log('Child Render', mode);

  return (
    <div>
      <h2>{props.name}</h2>
      <div>{'当前mode为：' + mode.value + ',当前值为:' + counter}</div>

      <Button onClick={CounterStore.inc.bind(CounterStore, mode.value)}>加1</Button>
      <Button onClick={CounterStore.dec.bind(CounterStore, mode.value)}>减1</Button>

      <Button
        onClick={() => {
          if (mode.value == 'fish') {
            mode.value = 'cat';
          } else {
            mode.value = 'fish';
          }
        }}>
        {'切换mode'}
      </Button>
    </div>
  );
});
