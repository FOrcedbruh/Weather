import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HourPage from "./pages/HourPage/HourPage";
import CityWeatherPage from "./pages/CityWeatherPage/CityWeatherPage";

const App: React.FC = () => {





    return (
        <section className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/hourWeather/:city/:id" element={<HourPage />}/>
                <Route path="/CityWeather/:city" element={<CityWeatherPage />}/>
            </Routes>
        </section>
    )
}


export default App;