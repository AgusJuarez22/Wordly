import style from "./CardConteiner.module.css"
import {useSelector} from "react-redux"
import Card from "../Card/Card"
const CardConteiner = () =>{
    const {countries, numPage} = useSelector(state => state)
    let from = (numPage - 1) * 10
    let to = numPage * 10

    const countryPaginate = countries.slice(from,to)
    return(
        <div className={style.conteiner}>
            {countryPaginate.map(country=>{
                return <Card
                key={country.id}
                id={country.id}
                flag={country.flag}
                name={country.name}
                region={country.region}
                />
            })}
        </div>
    )
}

export default CardConteiner