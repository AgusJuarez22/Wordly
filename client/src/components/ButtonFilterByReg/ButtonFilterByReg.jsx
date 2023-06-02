import { filterByRegion, numToOne } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ButtonFilterByReg = () => {
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    dispatch(filterByRegion(event.target.value));
    dispatch(numToOne());
  };
  return (
    <select onChange={changeHandler}>
       <option value="" disabled selected>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Antarctic">Antartic</option>
    </select>
  );
};

export default ButtonFilterByReg;
