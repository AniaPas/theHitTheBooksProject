import { FC } from "react";
import style from "./Footer.module.scss";
export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <p className={style.footerText}>Developed by A.P.</p>
    </footer>
  );
};
