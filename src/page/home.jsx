
import MobileBottomNav from "../components/mobilenav";
import Navbar from "../components/navbar";
import AccountPage from "./accountpage";
import HomePage from "./homePage";


function Home() {
    return (
        <div>
            <Navbar />
            <HomePage />
            <MobileBottomNav />

        </div>
    )
}
export default Home;