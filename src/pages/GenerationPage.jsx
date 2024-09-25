import Footer from "../components/Footer"
import InfoBlock from "../components/InfoBlock"
import Navbar from "../components/Navbar"
import Choose from "../components/Choose"

const GenerationPage = () => {
    return (
        <div className="flex flex-col min-h-[100vh] justify-between">
            <Navbar />
            <Choose />
            <Footer />
        </div>
    )
}

export default GenerationPage