import React from "react";
import Counter from "components/Counter";
import ShowResult from "components/ShowResult";
import Users from "components/Users";
import PublicLayout from "Layout/PublicLayout";

const Login = () => {
  return (
    <PublicLayout>
      <div>
        {/* <Counter />   // uncommmnet it to test redux toolkit
            <ShowResult /> */}
        <Users />
      </div>
    </PublicLayout>
  );
};

export default Login;
