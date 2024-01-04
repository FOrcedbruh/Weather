interface StylesItemType {
    textColor: string,
    background: string,
    cityTextColor: string,
}

export default interface StylesType {
    cloudy?: StylesItemType,
    night?: StylesItemType,
    sunny?: StylesItemType,
    rainy?: StylesItemType,
    snow?: StylesItemType,
    day?: StylesItemType,
    morning?: StylesItemType
}