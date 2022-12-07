import { FC } from "react";
import style from "./Header.module.scss";
export const Header: FC = () => {
  return (
    <div>
      <h1 className={style.logo}>Hit the Books</h1>
    </div>
  );
};

export default Header;
