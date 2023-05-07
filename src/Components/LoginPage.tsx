import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import classes from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { loginCredentials } from "../utils/credentials";
import authContext from "../context/auth-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const navigator = useNavigate();
  const authCtx = useContext(authContext);

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== loginCredentials.email) {
      setIsEmailInvalid(true);
      return;
    }
    if (password !== loginCredentials.password) {
      setIsEmailInvalid(false);
      setIsPasswordInvalid(true);
      return;
    }
    localStorage.setItem("token", loginCredentials.token);
    navigator("/dashboard");
    authCtx.setIsAuth(true);
  };
  return (
    <div className={classes.bg}>
      <Container
        className={`d-flex align-items-center justify-content-center flex-column `}
        style={{ minHeight: "100vh" }}
      >
        <div className={`border p-5 ${classes.container} ${classes.box}`}>
          <h1 className={`${classes.whiteBackground}`}>Login</h1>
          <Form
            className={`d-flex flex-column ${classes.whiteBackground}`}
            onSubmit={loginSubmitHandler}
          >
            <Form.Group className={`mb-3 ${classes.whiteBackground}`}>
              <Form.Label className={`${classes.whiteBackground}`}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${classes.whiteBackground}`}
              />
              {isEmailInvalid && (
                <Form.Text className={`text-danger ${classes.whiteBackground}`}>
                  enter valid email address
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className={`${classes.whiteBackground}`}>
              <Form.Label className={`${classes.whiteBackground}`}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${classes.whiteBackground}`}
              />
              {isPasswordInvalid && (
                <Form.Text className={`text-danger ${classes.whiteBackground}`}>
                  enter correct password
                </Form.Text>
              )}
            </Form.Group>

            <div
              className={`d-flex justify-content-center mt-3 ${classes.whiteBackground}`}
            >
              <Button
                variant="btn btn-outline-dark"
                type="submit"
                className={`w-50 ${classes.whiteBackground}`}
              >
                login
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
