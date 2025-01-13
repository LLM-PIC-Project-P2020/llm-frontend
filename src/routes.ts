
import {route, index, type RouteConfig} from "@react-router/dev/routes"

export default [
    index("./Mainpage.tsx"),
    route("/playground", "./Playground.tsx"),
    route("*?", "catchall.tsx"),
] satisfies RouteConfig
