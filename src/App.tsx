import { BrowserRouter, Route, Routes } from "react-router"
import Mainpage from "./Mainpage"

function App() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Mainpage/>} />
        </Routes>
    </BrowserRouter>
}

export default App
