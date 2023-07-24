import "../App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { onFail, onLoad, onLogin } from "../redux/action/authAction";

export default function Login() {
  const dispatch = useDispatch();
  const { token, isLoading, isError } = useSelector(
    (state) => state.authReducer
  );
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const getUser = async () => {
    try {
      dispatch(onLoad(true, false));
      const res = await axios.post(`https://reqres.in/api/login`, {
        email: inputUser,
        password: inputPass,
      });
      dispatch(onLogin(res.data.token));
      dispatch(onLoad(false, false));
    } catch (error) {
      dispatch(onFail(true, false));
      console.log(error);
    }
  };

  const handleName = (e) => {
    setInputUser(e.target.value);
  };
  const handlePass = (e) => {
    setInputPass(e.target.value);
  };

  const handleLoginButton = () => {
    getUser();
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/users"); // Mengarahkan pengguna ke halaman "/users" jika token tersedia
    }
  }, [token]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          id="name"
          //   value="eve.holt@reqres.in"
          placeholder="Input Your E-mail"
          onChange={handleName}
        />
        <input
          type="password"
          id="pass"
          //   value="cityslicka"
          placeholder="Input Your Password"
          onChange={handlePass}
        />
        <div>
          {isError && (
            <p
              style={{
                color: "red",
                margin: "5px",
              }}
            >
              Incorrect email or password
            </p>
          )}
        </div>
        <button onClick={handleLoginButton} type="submit">
          Log-In
        </button>
      </div>
    </>
  );
}
