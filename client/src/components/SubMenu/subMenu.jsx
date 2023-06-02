import { Link } from "react-router-dom";
import styles from "./subMenu.module.css";
import { useState } from "react";
const SubMenu = ({ item }) => {
  const [subnav , setSubnav] = useState(false)
  const showSubnavHandler = () =>{
    setSubnav(!subnav)
  }
  return (
    <>
      <Link to={item.path} className={styles.sideBarLink} onClick={item.subNav && showSubnavHandler}>
        <div>
          {item.icons}
          <span className={styles.sideBarLabel}>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
    </>
  );
};

export default SubMenu;
