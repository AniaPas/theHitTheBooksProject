import { useEffect, useContext, FC } from 'react';
import { getBooks, getAuthors } from '../../services/books.service';
import { GlobalState } from '../../Store/GlobalStore';
import { useNavigate } from 'react-router-dom';
import { CardComponentBook } from '../../components/CardComponentBook/CardComponentBook'

// material ui
import { Grid, Button, Alert, Snackbar } from '@mui/material';


export const All: FC = () => {
  const global = useContext(GlobalState) // 1 wszystko puste
  const navigate = useNavigate()
  const getAllBooks = async () => {
    try {
      const books = await getBooks()
      console.log(books)
      await global.globalGetBooks(books.data)

    } catch {
      // obsługujemy error
    }
  }

  const getAllAuthors = async () => {
    const authors = await getAuthors()
    await global.globalGetAuthors(authors.data)
  }

  useEffect(() => {
    getAllBooks() // 3 akcja pobrania danych z BE
    getAllAuthors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const howManyCards = global.globalBooks.length <= 2 ? 6 : 4

  const booksWithNotaAuthors = global.globalBooks.map(book => {
    const author = global.globalAuthors.find(item => item.author.toUpperCase() === book.author.toUpperCase())
    const nota = author ? author.nota : 'Brak noty biograficznej'
    return { ...book, nota }
  })

  const showMore = (id: number, title: string): void => {
    navigate(`/${title}/${id}`)

  }

  const handleCloseSnackbar = () => {
    global.globalOpenSnackbarChange(false)
  }

  const showCardWithBook: JSX.Element[] = booksWithNotaAuthors.map((item) => {
    return (
      <Grid item xs={12} md={howManyCards} key={item.id}>
        <CardComponentBook
          title={item.title}
          classCss='px150'
          author={item.author}
          desc={item.desc}
          nota={item.nota}
          collapse={true}
          imgScr={item.url}
          rating= {item.rating}

        >
          <Button onClick={() => showMore(item.id!, item.title)} size="small">Pokaż szczegóły</Button>
        </CardComponentBook>
      </Grid>)
  })
  return (
    <>    <Grid container spacing={3}>
      {showCardWithBook}
    </Grid>
      {global.globalalertInfoSnackbar.addBook && <Snackbar open={global.globalOpenSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={global.globalalertInfoSnackbar.severity} sx={{ width: '100%' }}>
          {global.globalalertInfoSnackbar.message}
        </Alert>
      </Snackbar>}</>


  )
}
