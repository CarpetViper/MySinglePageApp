import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
        <div className={s.navbar_logo}>
                    <NavLink to="/description">
                                Home       
                    </NavLink>             
        </div>
        <div className={s.navbar__row}>
            <div className={s.navbar__cell}>
                <div className={s.navbar_item}>
                    <NavLink to="/articles" activeClassName={s.activeLink}>
                                 articles
                    </NavLink>
                </div>
                <div className={s.navbar_item}>
                    <NavLink to="/images" activeClassName={s.activeLink}>
                                 images
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;

/*
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={s.navbar_cell}>
      <div className={s.navbar_item}>
        <NavLink to="/articles" activeClassName={s.activeLink}>
          articles
        </NavLink>
      </div>
      <div className={s.navbar_item}>
        <NavLink to="/images" activeClassName={s.activeLink}>
          images
        </NavLink>
      </div>
      <div className={s.navbar_item}>
        <NavLink to="/videos" activeClassName={s.activeLink}>
          videos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
 */
