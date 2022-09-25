
import { BrowserRouter, Routes, Route } from "react-router-dom"
import routes from "routes/routes"
import RouteAuthProvider from "routes/auth/RouteAuthProvider"

const Router = () => {
    
    return (

        <BrowserRouter >
            <Routes>
                {routes.map(({ path, Component,isProtected},index) => (
                    <Route
                      key={index}
                      path={path} 
                      element={
                        <RouteAuthProvider isProtected={isProtected} path={path}>
                            <Component  />
                        </RouteAuthProvider>
                    }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}



export default Router