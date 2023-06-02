import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, unmountComp } from "../../redux/actions";
import MapGoogle from "../../components/MapGoogle/MapGoogle";

import style from "./Detail.module.css";
const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getDetail(params.id));
    window.scrollTo(0, 0);
    return () => {
      dispatch(unmountComp());
    };
  }, [params.id, dispatch]);


  const { detail } = useSelector((state) => state);

  return (
    <div className={style.card}>
      {!detail?.capital ? (
        <div>...Loading</div>
      ) : (
        <div className={style.card1}>
          <img src={detail.flag} alt="flag" />
          <p>{detail.name} is a nation located in {detail.region}. It is internationally identified by its country code, {detail.id}. This country is situated in {detail.subregion} and has {detail.capital} as its capital. With an area of {detail.area} square kilometers and an approximate population of {detail.population} inhabitants</p>
        </div>
      )}
      {!detail?.capital ? (
        <div>...Loading</div>
      ) : (
        <MapGoogle country={detail.name}/>
      )}
    </div>
  );
};

export default Detail;
