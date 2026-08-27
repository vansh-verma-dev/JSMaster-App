import BottomNavigation from "../components/BottomNav";
import MobileTopBar from "./components/mobileTopBar";
import Navbar from "./components/navbar";

function HomePage(){
    return(
        <>
        <Navbar/>
        <MobileTopBar/>
        <h1>JsMaterApp</h1>
        <BottomNavigation/>
        </>
    )
}
export default HomePage;