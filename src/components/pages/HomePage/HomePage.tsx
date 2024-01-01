import styles from './HomePage.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataType from '../../../types/DataType';




const HomePage: React.FC = () => {

    const src: string = 'https://api.weatherapi.com/v1/forecast.json?key=07991a809bd848d8ae0183959240101&q=Moscow&days=7&aqi=no&alerts=no';


    const [weather, setWeather] = useState<DataType>();

    useEffect(() => {
        axios.get(src) .then(data => {
            setWeather(data.data);
                console.log(data.data);
        })
    }, [])


    return (
        <main className={styles.window}>
            <h1>{weather?.current.temp_c}</h1>
            <h2>{weather?.location.name}</h2>
            <section className={styles.info}>
                <div className={styles.hourly}>
                    
                </div>
                <div className={styles.daily}>

                </div>
            </section>
        </main>
    )
}




export default HomePage;