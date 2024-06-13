import { useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { Styles } from "./Styles.jsx";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");  
    };
    const handleSignupClick = () => {
        navigate("/signup");
    }

  return (
    <div
      style={Styles.LandingDivider}
    >
      <h1
        style={Styles.LandingHeader}
      >
        <div style={{ flex: 1, textAlign: "center" }}>MyShop</div>
        <div style={{ flexShrink: 0 }}>
          <Space>
            <Button onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleSignupClick}>Signup</Button>
          </Space>
        </div>
      </h1>
    </div>
  );
};
export default LandingPage;
