import "./Login.css";
import NavBar from "../common/NavBar";
import LoginForm from "../components/LoginForm";
const Login = (props) => {
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
