import BottomNavbar from "../components/bottomNavbar";
import MobileTopBar from "../components/mobileTopBar";
import Navbar from "../components/navbar";

function HomePage(){
    return(
        <div>
            <Navbar/>
            <h1>hey i am jsMaster App</h1>
            <MobileTopBar/>
            <BottomNavbar/>
        </div>
    )
}
export default HomePage;