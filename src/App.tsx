import { BrowserRouter, Route, Routes } from "react-router";
import Mainpage from "./Mainpage";
import Playground from "./Playground";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Mainpage/>} />
            <Route path="playground" element={<Playground />} />
        </Routes>
    </BrowserRouter>;
}

export default App;
