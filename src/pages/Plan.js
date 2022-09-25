import React, { useEffect, useState } from 'react'
import CheckpageAuth from "routes/auth/CheckpageAuth"


const Plan = () => {
    const [routeAccess , setRouteAccess] = useState({routeAcess:true, redirectTo:null});

    useEffect(()=>{
        setTimeout(()=>{
            setRouteAccess({routeAcess:false, redirectTo:"/about"});
        },4000)
    },[])

    return (
        <CheckpageAuth auth={routeAccess}>
            <div>Plan</div>
        </CheckpageAuth>
    )
}

export default Plan