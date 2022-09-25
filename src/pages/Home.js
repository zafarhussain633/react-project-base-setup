import React from 'react'
import Counter from "components/Counter"
import ShowResult from 'components/ShowResult';
import Users from "components/Users"


const Home = () => {
    return (
        <div>
            <Counter />
            <ShowResult />
            <Users />
        </div>
    )
}

export default Home