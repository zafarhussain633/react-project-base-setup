import { useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUsers,addUser } from "redux/users"
import { setToken } from 'util/token'
import { useNavigate } from 'react-router-dom'
import Loader from "common/Loader"

const Users = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const navigate =  useNavigate();

    const { users } = useSelector(state => ({
        users: state.users
    }), shallowEqual)


    const handleAddUser = async (e) => {
        e.preventDefault();
        await dispatch(addUser({name})).unwrap()
        // await dispatch(getUsers()).unwrap()
        setToken("jskldjfkldsjfklsdjlk")
        navigate("/dashboard")
        
    }

    return (
        <>
            <form onSubmit={handleAddUser}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button>Add user</button>
            </form>
            <Loader loading={users.loading} />
        </>
    )
}

export default Users