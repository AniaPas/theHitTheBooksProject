import { FC } from "react";
import style from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <span className={style.footerText}>Developed by A.P.</span>
      <span>
        <a href='https://www.linkedin.com/in/anna-pasieczna/'>
          <LinkedInIcon className={style.icon} />
        </a>
      </span>
    </footer>
  );
};
