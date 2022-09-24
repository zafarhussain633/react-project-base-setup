import { useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Services from "services"
import { getUsers,addUser } from "redux/users"
import Loader from "common/Loader"

const Users = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();

    const { users } = useSelector(state => ({
        users: state.users
    }), shallowEqual)

    const userLists = users.data;

    const handleFetchUser = async () => {
        dispatch(getUsers())
    }

    const handleAddUser = async (e) => {
        e.preventDefault();
        dispatch(addUser({name}))
        .then(res=>{
            dispatch(getUsers())
        })
    }

    return (
        <>
            <form onSubmit={handleAddUser}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button>Add user</button>
            </form>

             ==============<br/><br/><br/>
             <button onClick={handleFetchUser} >fetch user</button>
            <h1>user lists</h1>
            <b> {users.error && users.error}</b>
            {userLists?.length > 0 && userLists.map(res => <p key={res.id}>{res.title}</p>)}
            <Loader loading={users.loading} />
        </>
    )
}

export default Users