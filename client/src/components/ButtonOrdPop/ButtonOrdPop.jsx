import { orderByPopulation } from "../../redux/actions"
import { useDispatch } from "react-redux"

const ButtonOrdPop = () =>{
    const dispatch = useDispatch()
    const handleOrder = (event) =>{
     dispatch(orderByPopulation(event.target.value))
    }
    return(
        <select onChange={handleOrder}>
                <option value="" disabled selected>Order By Population</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
        </select>
    )
}

export default ButtonOrdPop