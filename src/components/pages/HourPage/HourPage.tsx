import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataType from "../../../types/DataType";
import styles from './HourPage.module.css';
import termometr from './../../../images/icons/thermometer-outline.svg';
import wind from './../../../images/icons/wind-svgrepo-com.svg';
import humidity from './../../../images/icons/humidity-svgrepo-com.svg';
import water from './../../../images/icons/water-svgrepo-com.svg';

const HourPage: React.FC = () => {

    const { id } = useParams();

    const numberID = Number(id);


    const [res, setRes] = useState<DataType>()
    
    const src: string = 'https://api.weatherapi.com/v1/forecast.json?key=07991a809bd848d8ae0183959240101&q=Moscow&days=7&aqi=no&alerts=no';


    useEffect(() => {
        axios.get(src).then(data => {
            setRes(data.data);
        })
    }, []);

    const currentHour = res?.forecast.forecastday[0].hour[numberID];

    console.log(currentHour);

    return (
        <main className={styles.window}>
            <section>
                <div className={styles.header}>
                    <h2>{res?.location.name}</h2>
                    <h3>{currentHour?.temp_c}° | {currentHour?.condition.text}</h3>
                </div>
                <div className={styles.info}>
                    <article className={styles.infoItem}>
                        <h4>UV INDEX</h4>
                        <h2>{currentHour?.uv}</h2>
                    </article>
                    <article className={styles.infoItem}>
                        <h4><img src={wind}/> WIND</h4>
                        <h2>{currentHour?.wind_kph} km/h</h2>
                    </article>
                    <article className={styles.infoItem}>
                        <h4> <img className={styles.termIcon} src={termometr}/>FEELS LIKE</h4>
                        <h2>{currentHour?.feelslike_c}°</h2>
                    </article>
                    <article className={styles.infoItem}>
                        <h4><img src={water}/> RAINFALL</h4>
                        <h2>{currentHour?.precip_mm} mm</h2>
                    </article>
                    <article className={styles.infoItem}>
                        <h4><img src={humidity}/> HUMIDITY</h4>
                        <h2>{currentHour?.humidity}%</h2>
                    </article>
                    <article className={styles.infoItem}>
                        
                    </article>
                </div>
            </section>
            <section>

            </section>
        </main>
    )
}




export default HourPage;