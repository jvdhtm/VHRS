import { Form, Input, Button, Checkbox } from "antd";
import Standard from "../layouts/Standard";
import { useContext } from "react";
import { Context } from "@vhrs/resources";
const { UserContext } = Context;

const Login = async () => {
  const user =  useContext(UserContext);
  if(user.userReadFuncProp ) await user.userReadFuncProp(1);

  console.log(user);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Standard>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm  p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 my-auto mx-auto">
        <Form
          className="space-y-6"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Standard>
  );
};

export default Login;
