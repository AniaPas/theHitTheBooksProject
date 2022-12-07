import { FC } from "react";
import style from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <p className={style.footerText}>
        Developed by A.P <LinkedInIcon />
      </p>
    </footer>
  );
};
