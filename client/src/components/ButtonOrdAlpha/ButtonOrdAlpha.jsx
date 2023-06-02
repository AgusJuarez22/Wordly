import { useDispatch } from "react-redux";
import { orderByAlphabetical } from "../../redux/actions";

const ButtonOrdAlpha = () => {
  const dispatch = useDispatch();
  const handleOrderAlphabetically = (event) => {
    dispatch(orderByAlphabetical(event.target.value));
  };
  return (
    <select onChange={handleOrderAlphabetically}>
      <option value="" disabled selected>Order Alphabetically</option>
      <option value="Ascendente">A-Z</option>
      <option value="Descendente">Z-A</option>
    </select>
  );
};

export default ButtonOrdAlpha;
