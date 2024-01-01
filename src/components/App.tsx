import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";



const App: React.FC = () => {





    return (
        <section className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </section>
    )
}


export default App;