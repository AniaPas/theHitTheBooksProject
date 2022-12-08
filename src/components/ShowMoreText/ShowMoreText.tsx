//FC and hooks
import { FC, useState } from "react";

//mui
import { Button, Typography } from "@mui/material";

interface ShowText {
  text: string;
}
export const ShowMoreText: FC<ShowText> = ({ text }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Typography variant='body2' color='text.secondary' sx={{ margin: 1 }}>
      {showMore ? text : `${text.substring(0, 100)}`}
      {text.length > 100 && (
        <Button
          variant='text'
          color='primary'
          sx={{
            fontWeight: 600,
            fontSize: 12,
            transition: "all 0.45s",
            "&:hover": {
              backgroundColor: "#ffc107",
            },
          }}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      )}
    </Typography>
  );
};
