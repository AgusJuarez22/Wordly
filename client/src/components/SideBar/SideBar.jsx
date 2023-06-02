import { Link, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import * as FaIcons from "react-icons/fa";
import * as Aiicons from "react-icons/ai";
import * as Biicons from "react-icons/bi";
import { useState } from "react";
import { SideBarData } from "./sideBarData";
import SubMenu from "../SubMenu/subMenu";
import SearchBar from "../SearchBar/SearchBar";
import ButtonFilterByAct from "../ButtonFilterByAct/ButtonFilterByAct";
import ButtonFilterByReg from "../ButtonFilterByReg/ButtonFilterByReg";
import ButtonOrdAlpha from "../ButtonOrdAlpha/ButtonOrdAlpha";
import ButtonOrdPop from "../ButtonOrdPop/ButtonOrdPop";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  const showSideBarHanlder = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className={styles.nav}>
        <Link to="#" className={styles.bars}>
          <FaIcons.FaBars onClick={showSideBarHanlder} />
        </Link>
      </div>
      <div className={sidebar ? styles.sideBarNav : styles.sideBarNavClose}>
        <div className={styles.sideBarWrap}>
          <Link to="#" className={styles.bars}>
            <Aiicons.AiOutlineClose onClick={showSideBarHanlder} />
          </Link>
          <div className={styles.SearchBar}>
          {location.pathname === "/home" && <SearchBar></SearchBar>}
          </div>
          {SideBarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
          {location.pathname === "/home" && (
            <div>
              <div className={styles.sideBarLink}>
                <FaIcons.FaFilter></FaIcons.FaFilter>
                <span className={styles.sideBarLabel}>Filter</span>
              </div>
              <div className={styles.buttons}>
                <ButtonFilterByAct />
                <ButtonFilterByReg />
              </div>
            </div>
          )}
          {location.pathname === "/home" && (
          <div>
            <div className={styles.sideBarLink}>
              <Biicons.BiSort></Biicons.BiSort>
              <span className={styles.sideBarLabel}>Sort</span>
            </div>
            <div className={styles.buttons}>
              <ButtonOrdAlpha />
              <ButtonOrdPop />
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
