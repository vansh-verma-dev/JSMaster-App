import BottomNavigation from "../components/bottomNav";
import MobileTopBar from "../components/mobileTopBar";
import Navbar from "../components/navbar";
import Projects from "./projectHome";

function HomePage() {
    return (
        <div>
            <Navbar />
            <MobileTopBar />
            <BottomNavigation />
        </div>
    )
}
export default HomePage;