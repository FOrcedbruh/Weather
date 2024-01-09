import styles from './PreviewPage.module.css';
import { useState, useEffect } from 'react';
import nightImage from './../../../images/backgrounds/night.jpg';
import dayImage from './../../../images/backgrounds/day.jpg';
import morningImage from './../../../images/backgrounds/morning.jpg';
import { Link } from 'react-router-dom';
import arrowImage from './../../../images/icons/arrow.svg';

const PreviewPage: React.FC = () => {

    const date = new Date;

    const time: number = date.getHours();

    const [night, setNight] = useState<boolean>(false);
    const [day, setDay] = useState<boolean>(false);
    const [morning, setMorning] = useState<boolean>(false);

    useEffect(() => {
        if (time >= 6 ) {
            setMorning(true)
        }
        if (time >= 12) {
            setMorning(false);
            setDay(true);
        }
        if (time >= 20) {
            setNight(true);
            setMorning(false);
            setDay(false);
        }
        
    }, []);

    console.log(time)


    const [city, setCity] = useState<string>('');


    const cityHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const goHandler  = () => {
        localStorage.setItem('city', city)
    }


    return (
        <main className={styles.window}>
            {night && <img className={styles.bg} src={nightImage}/>}
            {day && <img className={styles.bg} src={dayImage}/>}
            {morning && <img className={styles.bg} src={morningImage}/>}
            <div className={styles.container}>
                <h1>Enter the city</h1>
                <input type="text" value={city}  onChange={e => cityHandler(e)} placeholder='City...'/>
                {city && <Link onClick={goHandler} to='/home'>Go <img id={styles.arrow} src={arrowImage} /></Link>}
            </div>
        </main>
    )
}




export default PreviewPage;