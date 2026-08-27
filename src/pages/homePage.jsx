import BottomNavigation from "../components/BottomNav";
import MobileTopBar from "../components/mobileTopBar";
import Navbar from "../components/navbar";

function HomePage(){
    return(
        <div>
            <Navbar/>
            <BottomNavigation/>
            <h1>hey i am jsMaster App</h1>
            <MobileTopBar/>
        </div>
    )
}
export default HomePage;