
interface CurrentType {
    temp_c: number,
    humidity: number,
    wind_kph: number,
    feelslike_c: number,
    precip_mm: number,
    condition: ConditionType,
    last_updated: string
}

interface LocationType {
    name: string,
}

interface ConditionType {
    text: string, 
    icon: string
}

interface HourType {
    temp_c: number,
    time: string,
    humidity: number,
    condition: ConditionType,
    is_day: number,
    uv: number,
    wind_kph: number,
    feelslike_c: number,
    precip_mm: number,
    pressure_mb?: number,
}

interface DayType {
    avgtemp_c: number,
    avghumidity: number,
    condition: ConditionType
}

interface ForecastdayType {
    date: string,
    hour: HourType[],
    day: DayType
}

interface ForecastType {
    forecastday: ForecastdayType[]
}

export default interface DataType {
    current: CurrentType,
    location: LocationType,
    forecast: ForecastType
}