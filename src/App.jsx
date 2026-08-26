import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Projects from "./pages/projectHome";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<Projects/>} />
            </Routes>
        </>
    )
}
export default App;