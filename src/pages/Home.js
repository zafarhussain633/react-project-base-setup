import React from 'react'
import Counter from "components/Counter"
import ShowResult from 'components/ShowResult';
import Users from "components/Users"


const Home = () => {
    return (
        <div>
            {/* <Counter />   // uncommmnet it to test redux toolkit
            <ShowResult /> */}  
            <Users />
        </div>
    )
}

export default Home