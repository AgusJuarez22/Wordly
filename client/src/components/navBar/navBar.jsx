import {Link} from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";
import ButtonOrdPop from "../ButtonOrdPop/ButtonOrdPop";
import ButtonOrdAlpha from "../ButtonOrdAlpha/ButtonOrdAlpha";
import ButtonFilterByReg from "../ButtonFilterByReg/ButtonFilterByReg";
import ButtonFilterByAct from "../ButtonFilterByAct/ButtonFilterByAct";

const NavBar = () =>{
    return(
        <div className={style.mainConteiner}>
            <Link className={style.rute} to="/home">HOME</Link>
            <Link className={style.rute} to="/create">FORM</Link>
            <SearchBar></SearchBar>
            <div>
                <ButtonFilterByAct></ButtonFilterByAct>
                <ButtonFilterByReg></ButtonFilterByReg>
            </div>
            <div>
                <ButtonOrdAlpha></ButtonOrdAlpha>
                <ButtonOrdPop></ButtonOrdPop>
            </div>
        </div>
    )
}

export default NavBar;
