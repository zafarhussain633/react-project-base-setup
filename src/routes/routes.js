import pages from "routes/components";

const routes = [
    {
        path: "/",
        Component: pages.Home,
        isProtected: false,
    },
    {
        path: "/about",
        Component: pages.About,
        isProtected: false,
    },
    {
        path: "/dashboard",
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