import LandingPage from "../components/LandingPage";
import Footer from "../components/FooterComponent";


export default function Home() {


    return (
        <>
            <div>
                <LandingPage />
            </div>

            <Footer />
            <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
                <p>This website is under development. Feel free to explore without registration or data collection – simply sign in ✌️.</p>
            </div>

        </>

    );
}
