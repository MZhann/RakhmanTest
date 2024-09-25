import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBlock from "../components/InfoBlock";


const MainPage = () => {
    return (
        <div className="flex flex-col min-h-[100vh] justify-between">
            <Navbar />
            <InfoBlock />
            <div className='h-[1000px]'></div>
            <Footer />
        </div>
    );
};

export default MainPage;
