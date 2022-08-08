# Filed 组件
- 是用来承接普通字段的组件
    - name 标识字段在表单最终提交数据中的路径
    - initialValue 字段默认值

    - title  标识字段的标题
        - 如果 decorator 指定为 FormItem，那么在 FormItem 组件中会默认以接收 title 属性作为标签
        - 如果指定为某个自定义组件，那么 title 的消费方则由自定义组件来承接
        - 如果不指定 decorator，那么 title 则不会显示在 UI 上

    - required
        - 如果 decorator 指定为 FormItem，那么会自动出现星号提示，同时校验失败也会有对应的状态反馈，这些都是 FormItem 内部做的默认处理
        - 如果 decorator 指定为自定义组件，那么对应的 UI 样式则需要自定义组件实现方自己实现
        - 如果不指定 decorator，那么 required 只是会阻塞提交，校验失败不会有任何 UI 反馈。

    - decorator 属性
        - 代表字段的 UI 装饰器，通常我们都会指定为 FormItem
        - 注意 decorator 属性传递的是数组形式，第一个参数代表指定组件类型，第二个参数代表指定组件属性
            - [Component,ComponentProps]
    
    - FormConsumer 组件中会默认以接收 
        - 组件是作为响应式模型的响应器而存在，它核心是一个 render props 模式
        - 在作为 children 的回调函数中，会自动收集所有依赖，如果依赖发生变化，则会重新渲染
        - 借助 FormConsumer 我们可以很方便的实现各种计算汇总的需求     

# SchemaFiled 组件
- <SchemaField>
    <SchemaField.String
        name="username"
        title="用户名"
        required
        x-decorator="FormItem"
        x-component="Input"
        x-validator={{
            required: true,
        }}
        x-component-props={{
            prefix: "{{icon('UserOutlined')}}",
        }}
        x-reactions={[
        {
            dependencies: ['.phone#value', '.phone#valid'],
            fulfill: {
            state: {
                'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
                'component[1].phoneNumber': '{{$deps[0]}}',
            },
            },
        },
        ]}
    />
    </SchemaField>

- 枚举类型
    <SchemaField.String
        name="gender"
        title="性别"
        x-decorator="FormItem"
        x-component="Select"
        enum={[
            {
            label: '男',
            value: 1,
            },
            {
            label: '女',
            value: 2,
            },
            {
            label: '第三性别',
            value: 3,
            },
        ]}
        required
    />



#  表单校验
- @formily/validator 校验引擎
-  effects 或者 x-reactions/reactions 中实现联动校验

- api
    -  <SchemaField.String
        name="required_1"
        title="必填"
        required
        x-component="Input"
        x-decorator="FormItem"
      />

    -  <SchemaField.String
        name="required_2"
        title="必填"
        x-validator={{ required: true }}
        x-component="Input"
        x-decorator="FormItem"
      />

# 表单联动 更多场景参考官网
- effects 钩子函数
    - 一对一
    effects() {
        onFieldValueChange('select', (field) => {
        form.setFieldState('input', (state) => {
            //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
            state.display = field.value
        })
        })
    },

    - 一对多
     effects() {
        onFieldValueChange('select', (field) => {
        form.setFieldState('*(input1,input2)', (state) => {
            //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
            state.display = field.value
        })
        })
    },
    - 。。。。