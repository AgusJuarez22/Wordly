import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect } from "react";
import { getCountryCoordinates, clearLocation } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./MapGoogle.module.css";




const MapGoogle = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  const aux = props.country;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryCoordinates(aux));
    return()=>{
      dispatch(clearLocation())
    }
  }, [dispatch, aux]);

  const { location } = useSelector((state) => state);
  
 
  return (
    <div className="App">
      {!isLoaded || !location.lat || !location.lng || !location ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName={style.map} center={location} zoom={3}>
          <Marker position={location} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapGoogle;
