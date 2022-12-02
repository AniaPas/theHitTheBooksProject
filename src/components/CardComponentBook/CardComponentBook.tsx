import { FC } from 'react'
// material ui
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Tooltip } from '@mui/material';
import styles from './CardComponentBook.module.scss';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ShowMoreText } from '../ShowMoreText/ShowMoreText'
interface PropsCardComponentBook {
  title: string,
  classCss: string,
  nota?: string,
  author: string,
  desc: string,
  children?: JSX.Element | JSX.Element[],
  collapse?: boolean,
  isBackArrow?: boolean,
  imgScr?: string
}

export const CardComponentBook: FC<PropsCardComponentBook> = (
  {
    title,
    classCss,
    nota,
    author,
    desc,
    children,
    collapse,
    isBackArrow,
    imgScr
    
  }
) => {
  const navigate = useNavigate()
  const tooltip = () => {
    return (
      nota ?
        <Tooltip title={nota}>
          <Typography variant="h5" component="h5">
            Autor: {author.toUpperCase()}
          </Typography>
        </Tooltip> :
        <>
          <Typography variant="h5" component="h5">
            Autor: {author?.toUpperCase()}
          </Typography>
        </>
    )
  }
  const collapseFn = () => {
    if (collapse) {
      return (
        <ShowMoreText text={desc} />
      )
    } else {
      return (
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      )
    }
  }

  return (
    <div>
      {isBackArrow && <Button variant="text" startIcon={<ArrowBackIcon />} color='inherit' onClick={() => navigate(-1)}>
        Powrót
      </Button>}
      <Card >
        <CardMedia
          className={styles[classCss]}
          component="img"
          alt={`Okładka książki ${title}`}
          height="150"
          image={imgScr}
        />
        <CardContent >
          <Typography variant="h5" component="h5">
            Tutuł: {title}
          </Typography>
          {tooltip()}

        </CardContent>
        {collapseFn()}
        {!!{ children } &&
          <CardActions>
            {children}
          </CardActions>}
      </Card>

    </div>
  )
}

// warunek ? true : false

 // !! zminieająna boola tj. pusta tablica let arr = [] !!arr to będzie false
 // mały JS śmieszek let obj = {}  !!obj da true