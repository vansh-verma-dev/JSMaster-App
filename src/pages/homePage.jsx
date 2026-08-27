import BottomNavigation from "../components/BottomNav";
import MobileTopBar from "../components/mobileTopBar";
import Navbar from "../components/navbar";

function HomePage(){
    return(
        <div>
            <Navbar/>
            <BottomNavigation/>
            <MobileTopBar/>
        </div>
    )
}
export default HomePage;