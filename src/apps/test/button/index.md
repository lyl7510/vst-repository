# DEMO

```typescript jsx
import * as React from 'react';
import Form from "../../ARTcompent/bus-component/form/Form";
import {Row, Col} from "./../../ARTcompent/bus-component/grid";
import Input from "../../ARTcompent/bus-component/input";
import Select from "../../ARTcompent/bus-component/select";
import Radio from "../../ARTcompent/bus-component/radio";
import Checkbox from "../../ARTcompent/bus-component/checkbox";
import DatePicker from "../../ARTcompent/bus-component/date";
import Button from "../../ARTcompent/bus-component/button/index";
import {IFormResult, IModel} from "../../ARTcompent/bus-component/form/interface/index";


import "./style/index.less";
export interface FormExampleState {
  myForm: IModel;
}

export default class FormExample extends React.Component<{}, FormExampleState> {

  private myForm: Form = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      myForm: {
        accont: undefined,
        username: undefined,
        telphone: undefined,
        status: undefined,
        sex: undefined,
        interests: undefined,
        brithday: undefined,
        image: ""
      }
    }
  }
  public search(): void {
    this.myForm.validateFields().then((result: IFormResult) => {
      if (result.valid) {
        this.myForm.showMessage("accont", "账户信息已存在");
        console.log(result.bean);
      }
    });
  }

  public reset(): void {
    this.myForm.resetFields();
  }

  public render(): JSX.Element {
    const {myForm} = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={this.search.bind(this)}>保存</Button>
            <Button onClick={this.reset.bind(this)}>重置</Button>
          </Col>
        </Row>
        <Form layout={"horizontal"} itemCol={6} labelWidth={120} model={myForm} ref={(node) => {
          this.myForm = node
        }}>
          <Form.Item label={"账号"} rule={[{validator: "required", message: "账号不能为空"}, {
                       validator: "email|telphone",
                       message: "账号必须是手机号或者邮箱"
                     }]}
                     name={"accont"}>
            <Input placeholder={"请输入手机号或者邮箱"}/>
          </Form.Item>
          <Form.Item label={"用户名"} rule={[{validator: "required", message: "用户名不能为空"}]} name={"username"}>
            <Input placeholder={"请输入用户名"}/>
          </Form.Item>
          <Form.Item label={"手机号"}
                     rule={[{validator: "required", message: "手机号不能为空"}, {
                       validator: "telphone",
                       message: "手机号格式不正确"
                     }]}
                     name={"telphone"}>
            <Input placeholder={"请输入手机号"}/>
          </Form.Item>
          <Form.Item label={"状态"}
                     rule={{validator: "required", message: "状态不能为空"}}
                     name={"status"}>
            <Select placeholder={"请选择状态"}>
              <Select.Option value={0}>启用</Select.Option>
              <Select.Option value={1}>停用</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={"出生日期"}
                     rule={{validator: "required", message: "出生日期不能为空"}}
                     name={"brithday"}>
            <DatePicker placeholder={"请选择出生日期"}></DatePicker>
          </Form.Item>
          <Form.Item label={"性别"} itemCol={12}
                     rule={{validator: "required", message: "性别为空"}}
                     name={"sex"}>
            <Radio.Group>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={"爱好"} itemCol={12} rule={{validator: "required", message: "爱好至少选择三项"}} name={"interests"}>
            <Checkbox.Group>
              <Checkbox value={0}>游泳</Checkbox>
              <Checkbox value={1}>爬山</Checkbox>
              <Checkbox value={2}>健身</Checkbox>
              <Checkbox value={3}>旅游</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </React.Fragment>
    )
  }
}
  ```
# API

## Form
| 参数     | 说明     | 类型     | 默认值 |
| :-------- | :--------- | :-------------: | :------- |
| layout  | 表单布局  | horizontal \|vertical \| inline ||
| validate | 验证函数 | () => Promise<boolean> | |
| onValuesChange | 字段值更新时触发回调事件 | (changedValue: any, name: string, allValues: IModel) => void | |
| hideRequiredMark | 是否显示必填标签 | boolean | false |
| labelAlign | 左侧label位置 | left \| right | right |
| labelWidth | 左侧label宽度 | number | 120 |
| itemCol | item标签布局 | number | 12 |
| colon | 是否显示左侧冒号: | boolean | false |
| size | 设置字段组件的尺寸 | small \| middle \| large | middle |
| model | 表单数据 | [name: string]: any | |


<br>

## Form.item
|参数     |说明     |类型     | 默认值|
|--------|---------| -------------|-------|
|name| 表单名称，会作为表单字段 id 前缀使用|string||
|label| label 标签的文本| string||
|htmlFor| 设置子元素 label htmlFor 属性| string||
|required| 必填样式设置。如不设置，则会根据校验规则自动生成| boolean||
|itemCol| label 标签布局| number||
|labelAlign| 左侧label位置| left \| right||
|labelWidth| 左侧label宽度| number||
|colon| 是否显示左侧冒号：| boolean||
|rule|  验证规则| IRule \| IRule[]||
|validate| 验证函数| () => Promise<boolean>||


<br/>

## FormInstance
|  名称   |说明     |类型|
--------|---------| -------------
setFieldsValue | 表单创建完成时，设置表单值 | (model: IModel)=>void
validateFields | 表单验证，如果通过返回类型是true，不通过返回类型是false | ()=>Promise\<IFormResult\>
resetFields | 重置表单 | ()=>void
showMessage | 提示某个表单项错误 | (name: string, message: string)=>void


<br>

#### validateFields返回示例

  ```javascript
  validateFields().then((result: IFormResult) => {
      if (result.valid) {
        console.log(result.bean);
      }
    });
  ```


  <br>

## Interface


## IRule
|名称  |说明   |类型|
  |-------|---------| ---------|
validator | 规定内容格式| ((value: any, option: any, model: IModel) => boolean \| Promise\<boolean\>) \| string \| RegExp
message|数据类型不符合规定提示信息|string
max|string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度|number
min|string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度|number
  


