import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input, Space, message } from "antd";
import { Styles } from './Styles.jsx';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState(() => {
    const savedValue = localStorage.getItem('inputValue');
    return savedValue ? JSON.parse(savedValue) :
      { username: '', password: '' };
  });

  useEffect(() => {
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
  }, [inputValue]);

  
  const handleInputChange = ({ target: { name, value } }) => {
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFinish = () => {
    if (!inputValue.username.trim() || !inputValue.password.trim()) {
      message.error("Input is required");
      return;
    }
    alert(`${inputValue.username} is logged in.`);
    setInputValue({ username: '', password: '' });
    form.resetFields();
  };
  
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <Form
      layout="vertical"
      style={Styles.LoginStyle}
      form={form}
      initialValues={inputValue}
      onFinish={onFinish}
    >
        <Form.Item
          label={<span style={{ color: "white" }}>Username</span>}
          name="username"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input value={inputValue.username} onChange={handleInputChange} />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "white" }}>Password</span>}
          name="password"
          rules={[{ required: true, message: "Please input password!" }]}
        >
          <Input.Password
            value={inputValue.password}
            onChange={handleInputChange}
          />
        </Form.Item>
      <Space>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <a onClick={handleSignupClick}>Signup</a>
      </Space>
    </Form>
  );
};

