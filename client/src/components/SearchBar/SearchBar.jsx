import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName, numToOne } from "../../redux/actions";
import icon from "./icon.png"
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const changepHandler = (event) => {
    setCountry(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getCountriesByName(country));
    dispatch(numToOne());
    setCountry("");
  };
  return (
    <form>
      <ul id={style["growing-search-freebie"]}>
        <li>
          <div className={style["growing-search"]}>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Search by country..."
                value={country}
                onChange={changepHandler}
                name="search"
              />
            </div>
            <div className={style.submit}>
              <button type="submit" onClick={submitHandler} name="go_search">
                <span className={style.fa}>
                <img src={icon} alt='glass'></img>
                </span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default SearchBar;
