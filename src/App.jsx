import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import SplashScreen from "./components/splashScresn";
import AccountPage from "./page/accountpage";
import TasksPage from "./page/taskPage";
import Projects from "./page/project";
import CoursesPage from "./page/coursePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Profile" element={<AccountPage/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/TasksPage" element={<TasksPage/>} />
        <Route path="/CoursesPage" element={<CoursesPage/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  )
}
export default App;