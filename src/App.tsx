import React, { useContext, useEffect } from "react";
import TaskWrapper from "./Components/TaskWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/LoginPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import authContext from "./context/auth-context";
import AuthRoute from "./Components/AuthRoute";

function App() {
  const authCtx = useContext(authContext);
  const navigator = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    authCtx.setIsAuth(true);
    navigator("/dashboard");
  }, [authCtx, navigator]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <AuthRoute isAuth={authCtx.isAuth}>
              <TaskWrapper />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
