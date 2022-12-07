import { FC } from "react";
import style from "./Header.module.scss";
export const Header: FC = () => {
  return (
    <div className={style.headerContainer}>
      <span className={style.logo}>Hit the Books</span>
    </div>
  );
};

export default Header;
