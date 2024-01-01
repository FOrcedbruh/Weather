
interface CurrentType {
    temp_c: number,
    humidity: number,
    wind_kph: number,
    feelslike_c: number,
    precip_mm: number,
}

interface LocationType {
    name: string,
}

export default interface DataType {
    current: CurrentType,
    location: LocationType
}