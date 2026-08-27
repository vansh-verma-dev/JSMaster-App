import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage"; 
import TasksPage from "./pages/tasksPage";
import InterviewQuestionsPage from "./pages/interviewPage";
import ProjectsPage from "./pages/projectHome";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectsPage/>} />
                <Route path="/tasks" element={<TasksPage/>} />
                <Route path="/interviewQs" element={<InterviewQuestionsPage/>} />
            </Routes>
        </>
    )
}
export default App;