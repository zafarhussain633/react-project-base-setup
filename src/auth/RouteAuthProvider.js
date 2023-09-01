import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "util/token";

const RouteAuthProvider = ({ children, isProtected, path }) => {
  const [authCheking, setAuthCheking] = useState(true);
  const navigate = useNavigate();
  let token = getToken();

  useEffect(() => {
    if (isProtected && !token) {
      navigate("/login");
      setAuthCheking(false);
    } else if (path === "/login" && token) {
      navigate("/");
      setAuthCheking(false);
    } else {
      setAuthCheking(false);
    }
  }, [isProtected, token]);

  return <>{authCheking ? "" : children}</>;
};

export default RouteAuthProvider;

// refer below if you are handling login with global state

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getToken } from "util/token";
// import { useSelector, useDispatch } from "react-redux";
// import { setAuthToken } from "redux/authentication";
// const RouteAuthProvider = ({ children, isProtected, path }) => {
//     const [authCheking, setAuthCheking] = useState(true);
//     const { login } = useSelector((state) => state);
//     let isLogin = login.loginData?.token;
//     let cookieToken = getToken();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     useEffect(() => {
//         if (cookieToken && isLogin && path === "/login") {
//             setAuthCheking(false);
//             navigate("/programs");
//         } else if (!isLogin && !cookieToken && isProtected) {
//             setAuthCheking(false);
//             navigate("/login");
//         } else {
//             setAuthCheking(false);
//         }
//     }, [isLogin, cookieToken, path, authCheking, isProtected]);
//     useEffect(() => {
//         if (cookieToken) {
//             dispatch(setAuthToken());
//         }
//     }, [cookieToken]);
//     return <>{authCheking ? "" : children}</>;
// };
// export default RouteAuthProvider;
