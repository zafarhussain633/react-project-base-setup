import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Loader from "common/Loader"
import { useEffect } from 'react';
import { getUsers } from "redux/users"
import LogoutWrapper from "common/LogoutWrapper"

const Dashboard = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(state => ({
        users: state.users
    }), shallowEqual)

    const userLists = users.data;

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <div style={{position:"relative"}}>
            <LogoutWrapper>
              <button style={{ position: "sticky", top: 10, right: 20, color: "blue" }} >
                Logout
              </button>
            </LogoutWrapper>
           
            <h1>user lists</h1>
            <b> {users.error && users.error}</b>
            {userLists?.length > 0 && userLists.map(res => <p key={res.id}>{res.title}</p>)}
            <Loader loading={users.loading} />
        </div>
    )
}

export default Dashboard