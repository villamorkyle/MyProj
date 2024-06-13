import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const SignupForm = () => {
    const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (storedData) {
      // Set the form data to the last saved data
      setFormData(storedData[storedData.length - 1]);
    }
  }, []);

  const handleFormChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleFormSubmit = () => {
    const storedData = JSON.parse(localStorage.getItem('signupData')) || [];
    const newData = [...storedData, formData];
      localStorage.setItem('signupData', JSON.stringify(newData));
      form.resetFields();
      console.log(formData);

       // Reset the formData state
       setFormData({
         username: "",
         email: "",
         password: "",
       });
    
    // You may want to perform further actions after saving the data, like redirecting to another page
    };
    

  return (
    <Form layout="vertical" form={form}>
      <Form.Item label="Username">
        <Input value={formData.username} onChange={e => handleFormChange('username', e.target.value)} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={formData.email} onChange={e => handleFormChange('email', e.target.value)} />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password value={formData.password} onChange={e => handleFormChange('password', e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleFormSubmit}>Sign Up</Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;