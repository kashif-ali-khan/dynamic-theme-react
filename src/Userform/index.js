import React, { useState } from "react";
import OtherForm from './../OtherForm';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Divider
} from "antd";

const Userform = () => {
  const [componentSize, setComponentSize] = useState("large");
  const onFormLayoutChange = (obj, values, all) => {
    console.log(values);
    setComponentSize(values.size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          some_value: "Kashif khan",
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Input"
          name="some_value"
          rules={[
            {
              min: 5,
              max: 10,
              required: true,
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="democontrol">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo1">Demo1</Select.Option>
            <Select.Option value="demo2">Demo2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect" name="treeselect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker" name="dob">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber" name="number_chooser">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" name="switch1">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
      <Divider dashed style={{fontWeight:'bold'}}>Second Form Begins</Divider>
      <OtherForm />
    </>
  );
};

export default Userform;
