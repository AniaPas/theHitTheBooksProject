import { FC } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
export const Header: FC = () => {
  return (
    <div className={style.headerContainer}>
      <Link to='/' className={style.logo}>
        Hit the Books
      </Link>
    </div>
  );
};

export default Header;
