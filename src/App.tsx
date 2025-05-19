import { BrowserRouter, Route, Routes } from "react-router";
import Mainpage from "./Mainpage";
import Playground from "./components/Playground";
import Courses from "./components/Courses";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Mainpage />} />
                <Route path="playground" element={<Playground />} />
                <Route path="courses" element={<Courses />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
