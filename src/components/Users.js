import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getUsers, addUser } from "redux/users";
import { setToken } from "util/token";
import { useNavigate } from "react-router-dom";
import Loader from "common/Loader";

const Users = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const navigate = useNavigate();

  const { users } = useSelector(
    (state) => ({
      users: state.users,
    }),
    shallowEqual
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    setToken("jh_dj66565fdsfd5656ddk"); // set this token after login api successful
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <Loader loading={users.loading} />
    </>
  );
};

export default Users;
