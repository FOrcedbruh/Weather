import styles from './HomePage.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataType from '../../../types/DataType';
import StylesType from '../../../types/StylesType';
import nightImage from './../../../images/backgrounds/night.jpg';
import dayImage from './../../../images/backgrounds/day.jpg';
import morningImage from './../../../images/backgrounds/morning.jpg';
import cloudyImage from './../../../images/backgrounds//cloudy.jpg';
import { Link } from 'react-router-dom';




const HomePage: React.FC = () => {

    const src: string = 'https://api.weatherapi.com/v1/forecast.json?key=07991a809bd848d8ae0183959240101&q=Moscow&days=7&aqi=no&alerts=no';


    const [weather, setWeather] = useState<DataType>();

    useEffect(() => {
        axios.get(src) .then(data => {
            setWeather(data.data);
                console.log(data.data);
        })
    }, []);

    const [cloudy, setCloudy] = useState<boolean>(false);
    const [night, setNight] = useState<boolean>(false);
    const [morning, setMorning] = useState<boolean>(false);
    const [day, setDay] = useState<boolean> (false);

    const currentTime: number = Number(weather?.current.last_updated.slice(11, 13));

    useEffect(() => {
        if (weather?.current.condition.text === ('Partly cloudy' || 'Cloudy' || 'Mostly cloudy')) {
            setCloudy(true);
            setDay(false);
            setNight(false);
            setMorning(false);
        }
        if (currentTime >= 20 ) {
            setNight(true);
            setDay(false);
            setMorning(false);
        }
        if (currentTime >= 7 && currentTime <= 13) {
            setNight(false);
            setMorning(true);
            setDay(false);
        }
        if (currentTime >= 14 && currentTime <= 19) {
            setDay(true);
            setNight(false);
            setMorning(false);
        }
    }, [weather?.current.condition.text])


   

    const Styles: StylesType = {
        night: {
            textColor: '#0B0B2A00',
            background: nightImage,
            cityTextColor: 'linear-gradient(180deg, #251683 0%, rgba(100, 97, 115, 0.99) 100%)'
        },
        day: {
            textColor: 'linear-gradient(180deg, #5A92E7 10.54%, rgba(68, 11, 88, 0.63) 78.1%)',
            background: dayImage,
            cityTextColor: 'linear-gradient(180deg, #DCD2DE 0%, rgba(176, 174, 191, 0.99) 100%)'
        },
        morning: {
            textColor: 'linear-gradient(180deg, rgba(160, 159, 234, 0.88) 10.54%, rgba(31, 29, 96, 0.24) 78.1%)',
            background: morningImage,
            cityTextColor: 'linear-gradient(180deg, #C58DE8 0%, rgba(114, 102, 186, 0.99) 100%)'
        },
        cloudy: {
            textColor: '#0F0F1026',
            background: cloudyImage,
            cityTextColor: '#BCB9D1 '
        }
    }

    return (
        <main className={styles.window}>
            {night && <img src={Styles.night?.background} className={styles.background}/>}
            {day && <img src={Styles.day?.background} className={styles.background}/>}
            {morning && <img src={Styles.morning?.background} className={styles.background}/>}
            {cloudy && <img src={Styles.cloudy?.background} className={styles.background}/>}
            <h1>{weather?.current.temp_c}°</h1>
            <h2>{weather?.location.name}</h2>
            <section className={styles.info}>
                <div className={styles.hourly}>
                    {weather?.forecast.forecastday[0].hour.map((hour, index: number) => {
                        if (weather.forecast.forecastday[0].hour.indexOf(hour)%4 === 0) {
                            return (
                                <Link key={hour.time} to={`/${index}`}>
                                    <article   className={styles.hour}>
                                        <p>{hour.time.slice(11)}</p>
                                        <img src={hour.condition.icon}/>
                                        <p>{hour.temp_c}°</p>
                                    </article>
                                </Link>
                                
                            )
                        }
                        
                    })}
                </div>
                <div className={styles.daily}>

                </div>
            </section>
        </main>
    )
}




export default HomePage;