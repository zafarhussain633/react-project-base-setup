import pages from "routes/components";

const routes = [
    {
        path: "/login",
        Component: pages.Home,
        isProtected: false,
    },
    {
        path: "/about",
        Component: pages.About,
        isProtected: false,
    },
    {
        path: "/",
        Component: pages.Dashboard,
        isProtected: true,
    },
    {
        path:"/plan",
        Component: pages.Plan,
        isProtected:true
    }

]

export default routes;