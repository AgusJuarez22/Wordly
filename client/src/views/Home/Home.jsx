import CardConteiner from "../../components/CardConteiner/CardConteiner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <div className={style.pagCard}>
        <Paginate />
      </div>
      <div className={style.cardCont}>
          <CardConteiner />
        </div>
    </div>
  );
};

export default Home;
