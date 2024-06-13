import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Space,
  message,
} from "antd";
import { Styles } from "./Styles.jsx";
import { GenderCheckbox } from "./components/CheckBox.jsx";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [localData, setLocalData] = useState({
    lastname: "",
    firstname: "",
    MI: "",
    age: "",
    birthday: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmedpass: "",
  });

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("signupFormData"));
    if (formData) {
      setLocalData(formData[formData.length - 1]);
    }
  }, []);

  const handleReset = () => {
    form.resetFields();
  };

  const onChange = (key, value) => {
    setLocalData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleProceed = () => {
    const formData = JSON.parse(localStorage.getItem("signupFormData")) || [];
    const updatedData = [...formData, localData];
    localStorage.setItem("signupFormData", JSON.stringify(updatedData));
    setLocalData(updatedData);
    console.log(localData);
    navigate("/login");
    form
      .validateFields()
      .catch((errorInfo) => {
        message.error("Please fill in all required fields.");
      })
      .resetFields();
    setLocalData({
      lastname: "",
      firstname: "",
      MI: "",
      age: "",
      birthday: "",
      gender: "",
      email: "",
      username: "",
      password: "",
      confirmedpass: "",
    });
  };

  return (
    <div style={Styles.Container}>
      <Form layout="vertical" form={form} style={Styles.SignupStyle}>
        <Form.Item label="Fullname" required>
          <Space.Compact block>
            <Form.Item noStyle rules={[{ required: true }]}>
              <Input
                placeholder="Lastname"
                size="small"
                style={{ width: "20%" }}
                value={localData.lastname}
                onChange={e => onChange("lastname", e.target.value)}
              />
            </Form.Item>
            <Form.Item noStyle rules={[{ required: true }]}>
              <Input
                placeholder="Firstname"
                size="small"
                style={{ width: "20%" }}
                value={localData.firstname}
                onChange={e => onChange("firstname", e.target.value)}
              />
            </Form.Item>
            <Form.Item noStyle rules={[{ required: true }]}>
              <Input
                placeholder="M.I."
                size="small"
                style={{ width: "10%" }}
                value={localData.MI}
                onChange={e => onChange("MI", e.target.value)}
              />
            </Form.Item>
          </Space.Compact>
        </Form.Item>

        <Form.Item
          label="Age"
          required
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <InputNumber
            min={1}
            max={500}
            size="small"
            initialvalues={"0"}
            style={{ width: "50px" }}
            value={localData.age}
            onChange={e => onChange("age", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Birthday"
          required
          rules={[{ required: true, message: "Please select your birthday!" }]}
        >
          <DatePicker
            size="small"
            value={localData.birthday}
            onChange={e => onChange("birthday", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Gender"
          required
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <GenderCheckbox
            value={localData.gender}
            onChange={e => onChange("gender", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          required
          rules={[{
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            size="small"
            style={{ width: "200px" }}
            placeholder="juandelacruz24@email.com"
            value={localData.email}
            onChange={e => onChange("email", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Username"
          required
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            size="small"
            style={{ width: "50%" }}
            value={localData.username}
            onChange={e => onChange("username", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          required
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            style={{ width: "50%" }}
            value={localData.password}
            onChange={e => onChange("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          required
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            style={{ width: "50%" }}
            value={localData.confirmedpass}
            onChange={e => onChange("confirmedpass", e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button htmlType="submit" type="primary" onClick={handleProceed}>
              Proceed
            </Button>
            <Button htmlType="submit" type="primary" onClick={handleReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignupForm;
