import { FC } from "react";
// material ui
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Tooltip,
} from "@mui/material";
import styles from "./CardComponentBook.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ShowMoreText } from "../ShowMoreText/ShowMoreText";
interface PropsCardComponentBook {
  title: string;
  classCss: string;
  nota?: string;
  author: string;
  desc: string;
  children?: JSX.Element | JSX.Element[];
  collapse?: boolean;
  isBackArrow?: boolean;
  imgScr?: string;
  rating: number[];
}

export const CardComponentBook: FC<PropsCardComponentBook> = ({
  title,
  classCss,
  nota,
  author,
  desc,
  children,
  collapse,
  isBackArrow,
  imgScr,
  rating,
}) => {
  const navigate = useNavigate();
  const ratingValue =
    rating.length > 0
      ? Math.round(
          rating.reduce((pre, curent) => pre + curent, 0) / rating.length
        )
      : "No rating";
  const tooltip = () => {
    return nota ? (
      <>
        <Tooltip
          title={
            <Typography variant='body2' sx={{ fontSize: 10 }}>
              {nota}
            </Typography>
          }
          className={styles.tooltipMain}
        >
          <Typography variant='h6' component='h6' sx={{ fontWeight: 600 }}>
            Author: {author}
          </Typography>
        </Tooltip>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          <span>Rating: {ratingValue}/10</span>
        </Typography>
      </>
    ) : (
      <>
        <Typography variant='h6' component='h6' sx={{ fontWeight: 600 }}>
          Author: {author}
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          <span>Rating: {ratingValue}/10</span>
        </Typography>
      </>
    );
  };
  const collapseFn = () => {
    if (collapse) {
      return <ShowMoreText text={desc} />;
    } else {
      return (
        <Typography variant='body2' color='text.secondary' sx={{ margin: 1 }}>
          {desc}
        </Typography>
      );
    }
  };

  return (
    <div>
      {isBackArrow && (
        <Button
          variant='text'
          startIcon={<ArrowBackIcon />}
          color='inherit'
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      )}
      <Card
        className={styles.bodyCardBook}
        sx={{
          backgroundColor: "rgb(188, 188, 188)",
        }}
      >
        <CardMedia
          className={styles[classCss]}
          component='img'
          sx={{
            width: 200,

            filter: "grayscale(1)",
            backgroundColor: "rgba(61, 61, 61, 1)",
            "&:hover": {
              filter: "grayscale(0)",
            },
          }}
          alt={`Book cover ${title}`}
          image={imgScr}
        />
        <CardContent>
          <Typography variant='h6' component='h6' sx={{ fontWeight: 600 }}>
            Title: {title}
          </Typography>
          {tooltip()}
        </CardContent>
        {collapseFn()}
        {!!{ children } && (
          <CardActions
            sx={{ flexDirection: "column-reverse" }}
            className={styles.cardActionBook}
          >
            {children}
          </CardActions>
        )}
      </Card>
    </div>
  );
};

// warunek ? true : false

// !! zminieająna boola tj. pusta tablica let arr = [] !!arr to będzie false
// mały JS śmieszek let obj = {}  !!obj da true
