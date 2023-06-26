import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckpageAuth = ({ children, auth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.routeAcess) {
      navigate(auth.redirectTo);
    }
  }, [auth]);

  return children;
};

export default CheckpageAuth;
