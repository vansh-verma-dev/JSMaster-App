import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import PrivacyPolicy from "../pages/Privacypolicy";
import InterviewQuestions from "../pages/Interviewquestions";
import Profile from "../pages/profile&setting";

function RoutesPages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/topics" element={<Topics />} />
                <Route path="/task" element={<Task />} />
                <Route path="/projects" element={<Projects />} /> */}
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/mcq" element={<InterviewQuestions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
        </>
    )
}
export default RoutesPages;