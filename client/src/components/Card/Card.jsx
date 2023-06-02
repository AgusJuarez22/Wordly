import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`} className={style.link}>
      <div className={style.card}>
        <img className={style.img} src={props.flag} alt="flag" />
        <p className={style.info}> {props.name} is a country located in the region of {props.region}...</p>
      </div>
    </Link>
  );
};

export default Card;
