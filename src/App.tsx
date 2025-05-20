import { BrowserRouter, Route, Routes } from "react-router";
import Mainpage from "./Mainpage";
import Playground from "./components/Playground";
import Courses from "./components/Courses";
import Class from "./components/Courses/Class";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Mainpage />} />
                <Route path="playground" element={<Playground />} />
                <Route path="courses">
                    <Route index element={<Courses />} />
                    <Route path=":courseId/:classId?" element={<Class />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
