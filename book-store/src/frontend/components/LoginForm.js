import "./LoginForm.css";
import Input from "../common/Input";
import Button from "../common/Button";
import CheckBox from "../common/CheckBox";
const Login = (props) => {
  return (
    <div className="login-container">
      <h5 className="text-center">Login</h5>
      <Input label="Email" placeholder="khyatibaria55@gmail.com" />
      <Input label="Password" placeholder="*********" />
      <div className="remember-me">
        <CheckBox label="Remember Me" />
        <Button className="btn text small" label="Forgot Password?" />
      </div>
      <Button className="btn full-width primary btn-hover" label="Login" />
      <div className="link-text">You don't have a Profile?</div>
      <Button className="btn outline-primary full-width" label="Sign Up" />
    </div>
  );
};

export default Login;
