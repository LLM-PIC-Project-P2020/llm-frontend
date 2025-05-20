
import {route, index, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("./Mainpage.tsx"),
    route("/playground", "./components/Playground/index.tsx"),
    route("/courses", "./components/Courses/index.tsx"),
    route("/courses/:courseId/:classId?", "./components/Courses/Class/index.tsx"),
    route("*?", "catchall.tsx"),
] satisfies RouteConfig;
