import FrontLayout from "@/components/layout/FrontLayout";
import Contact from "@/pages/contact/Contact";
import HomePage from "@/pages/home";
import SingleBlog from "@/pages/single-blog";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children : [
            {
                index: true,
                Component : HomePage
            },
            {
                path : "/single-blog/:slug",
                Component : SingleBlog
            },
            {
                path : "/contact",
                Component : Contact
            }
        ]
    }
])
export default router;