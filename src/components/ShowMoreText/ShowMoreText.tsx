import { Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
interface ShowText {
    text: string,

}
export const ShowMoreText: FC<ShowText> = ({text}) => {
    const [showMore , setShowMore] = useState(false)

  return (
    <Typography variant="body2" color="text.secondary" sx={{margin: 1}}>
         {showMore? text : `${text.substring(0, 100)}`}
         {text.length > 100 && <Button variant="text" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
         </Button>}

    </Typography>
  )
}
