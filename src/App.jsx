import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/tasksPage";
import InterviewQuestionsPage from "./pages/interviewPage";
import ProjectsPage from "./pages/projectHome";
import HomePage from "./pages/homePage";
import JsDocsPage from "./pages/Jsdocspage";
import TermsPage from "./pages/termsPage";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectsPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/termsPage" element={<TermsPage />} />
      <Route path="/topics" element={<JsDocsPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/interviewQs" element={<InterviewQuestionsPage />} />
    </Routes>
  );
}

export default App;