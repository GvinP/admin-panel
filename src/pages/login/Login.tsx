import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducers/authReducer";
import { useAppDispatch } from "../../store/hooks";
import "./login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(login({ email: username, password, navigate }));
  };

  return (
    <div className="loginContainer">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="loginInput"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="loginInput"
      />
      <button onClick={handleClick} className="loginButton">
        Login
      </button>
    </div>
  );
};
