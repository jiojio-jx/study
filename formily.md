# formily 表单方案

- 一、学习 formily 原因
    - 在多表单、多联动的业务场景下，自己使用 antd UI + useState 来 管理表单数据、表单联动、UI，存在难扩展、难维护的情况，且需要一定的人力。
        - 多表单字段 数据管理
        - 多表单联动 状态管理（显示隐藏、正则等）

- 二、解决了普遍表单业务的诉求：
    - 数据管理、字段/UI 管理、检验管理、联动管理

- 三、formily 核心插件
    - 如何解决多表单场景
        - 领域模型 （自定义表单字段属性）
        - 路径系统 （快速定位、控制表单字段）
        - 生命周期 （初始化、关联 字段）
        - 分层结构
            - @formily/core： 提供状态管理、MVVM 模型，将表单 UI 与 数据状态管理抽离
            - @formily/reactive：提高表单渲染性能、关联字段

- 四、表单模型
    - 字段管理模型： filed、ObjectField、ArrayField、VoidField
    - 字段模型：query
    - 数据模型
    - 联动模型
    - 路径系统


# formily 设计原型

- 架构
    - 内核层 （ 表单内核 + JSON Schema ）
        - FromGraph ( Models、Path System )、Form LifeCycles、校验器、Reactive、Shared
    - UI 桥接层
    - 扩展组件库


## 参考文档
https://blog.fishedee.com/2021/07/13/Formily%E7%9A%84Reactive%E7%9A%84%E7%BB%8F%E9%AA%8C%E6%B1%87%E6%80%BB/

https://blog.fishedee.com/2021/07/14/Formily%E7%9A%84core%E7%9A%84%E7%BB%8F%E9%AA%8C%E6%B1%87%E6%80%BB/#61-%E4%B8%BB%E5%8A%A8%E8%81%94%E5%8A%A8

https://core.formilyjs.org/zh-CN/api/entry/create-form

https://formilyjs.org/zh-CN/guide/quick-start

