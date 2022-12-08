import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./Home.module.scss";
import bookSketch from "./bookSketch.png";

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <p className={styles.quote}>
        "Do not admire and believe elevated quotes like this one. Just Hit the
        Books,find out for yourself and remain sceptical." A.P.
      </p>
      <img className={styles.bookImg} src={bookSketch} alt='bookSketch'></img>
      <p className={styles.description}>
        Here you can keep the LIST of the books you have read ore those you
        intend to read in the future. Also, you may EDIT or REMOVE book
        decriptions, if you so wish, as well as feel free to ADD your favourite
        your reads. Thus, stop procrastinating and hit those pages hard now. Oh,
        and remeber to leave your rating, too!
        <Link to='/all'>
          <ArrowForwardIcon
            sx={{
              fontWeight: 600,
              color: "#212121",
              transition: "all 0.45s",
              "&:hover": {
                color: "#ffc107",
              },
            }}
            className={styles.arrow}
          />
        </Link>
      </p>
    </div>
  );
};
