import BottomNavigation from "../components/bottomNav";
import MobileTopBar from "../components/mobileTopBar";
import Navbar from "../components/navbar";
 

function HomePage() {
    return (
        <div>
            <Navbar />
            <MobileTopBar />
            <h1>Heyy i am home Page</h1>
            <BottomNavigation />
        </div>
    )
}
export default HomePage;