import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HourPage from "./pages/HourPage/HourPage";
import CityWeatherPage from "./pages/CityWeatherPage/CityWeatherPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";



const App: React.FC = () => {





    return (
        <section className="wrapper">
            <Routes>
                <Route path="/" element={<PreviewPage />}/>
                <Route path="/Home" element={<HomePage />}/>
                <Route path="/hourWeather/:city/:id" element={<HourPage />}/>
                <Route path="/CityWeather/:city" element={<CityWeatherPage />}/>
                <Route path="/dayWeather/:city/:id" element={<HourPage />}/>
            </Routes>
        </section>
    )
}


export default App;