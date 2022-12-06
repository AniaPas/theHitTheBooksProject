import { FC } from "react";
import style from "./Footer.module.scss";
export const Footer: FC = () => {
  return (
    <footer>
      <div className={style.footer}>
        <span>Developed by A.P.</span>
      </div>
      <div className={style.icon}></div>
    </footer>
  );
};
