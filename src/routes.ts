
import {route, type RouteConfig} from "@react-router/dev/routes"

export default [
    route("/", "./Mainpage.tsx"),
    route("/playground", "./Playground.tsx"),
    route("*?", "catchall.tsx"),
] satisfies RouteConfig
