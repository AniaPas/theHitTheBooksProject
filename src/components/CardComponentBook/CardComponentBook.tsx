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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// styles
import styles from "./CardComponentBook.module.scss";

//hooks
import { useNavigate } from "react-router-dom";

//components
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
          sx={{
            fontWeight: 600,
            transition: "all 0.45s",
            "&:hover": {
              color: "rgb(205, 202, 202)",
              backgroundColor: "transparent",
            },
          }}
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
            transition: "all 0.45s",
            "&:hover": {
              filter: "grayscale(0)",
            },
          }}
          alt={`Book cover ${title}`}
          image={imgScr || `https://via.placeholder.com/150`}
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
            sx={{ alignItems: "flex-end" }}
            className={styles.cardActionBook}
          >
            {children}
          </CardActions>
        )}
      </Card>
    </div>
  );
};
