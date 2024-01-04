import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HourPage from "./pages/HourPage/HourPage";


const App: React.FC = () => {





    return (
        <section className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/:id" element={<HourPage />}/>
            </Routes>
        </section>
    )
}


export default App;