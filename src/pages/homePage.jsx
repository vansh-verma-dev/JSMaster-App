import BottomNavigation from "../components/bottomNav";
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