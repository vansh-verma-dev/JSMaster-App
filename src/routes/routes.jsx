import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import PrivacyPolicy from "../pages/Privacypolicy";
import InterviewQuestions from "../pages/Interviewquestions";
import Profile from "../pages/profile&setting";
import Projects from "../pages/project";
import TaskPage from "../pages/taskpage";
import TopicsPage from "../pages/topics";
function RoutesPages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Topic" element={<TopicsPage/>} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/mcq" element={<InterviewQuestions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
        </>
    )
}
export default RoutesPages;