import { useSelector, useDispatch } from "react-redux"
import { filterByActivity, numToOne } from "../../redux/actions"
const ButtonFilterByAct = () =>{
    const {activities} = useSelector(state => state)
    const dispatch = useDispatch()
    const changeHandler = (event) =>{
        dispatch(filterByActivity(event.target.value))
        dispatch(numToOne())
    }
    return(
        <select onChange={changeHandler}>
            <option value="" disabled selected>Filter by Activity</option>
            {activities.map((element, index) => {
                return <option key={index} value={element.name}>{element.name}</option>
            })}
        </select>
    )
}


export default ButtonFilterByAct