import { AlertColor } from '@mui/material'
import {useState, createContext, FC } from 'react'
// import { GlobalStateInterface, AuthorInterface, BookInterface, GlobalStoreInterface } from './HelperInterFace'

export interface BookInterface {
  id?: number,
  title: string,
  author: string,
  desc: string,
  years?: number,
  rating: number[],
  url?: string
}

export interface AuthorInterface {
  author: string,
  books?: string[],
  nota: string
}
interface AlertInfoSnackbar {
  severity: AlertColor | undefined,
  message: string,
  addBook?: boolean
}
interface GlobalStateInterface {
  globalBooks: BookInterface[],
  globalAuthors: AuthorInterface[],
  globalOpenSnackbar: boolean
  globalGetBooks: (data: BookInterface[]) => void
  globalGetAuthors: (data: AuthorInterface[]) => void
  globalalertInfoSnackbar: AlertInfoSnackbar,
  globalOpenSnackbarChange: (payload: boolean)=> void,
  globalalertInfoSnackbarChange: (payload: AlertInfoSnackbar) => void
}

interface GlobalStoreInterface {
  children : JSX.Element | JSX.Element[]
}

export const GlobalState = createContext<GlobalStateInterface>({
    globalBooks: [],
    globalAuthors: [],
    globalGetBooks: () => {},
    globalGetAuthors: () => {},
    globalOpenSnackbar: false,
    globalalertInfoSnackbar: {
      severity: 'success',
      message: ''
    },
    globalOpenSnackbarChange: () => {},
    globalalertInfoSnackbarChange: () => {}

})

export const GlobalStore:FC<GlobalStoreInterface> = (props) => {
const [books, setBooks] =useState<BookInterface[]>([])
const [authors, setAuthors] = useState<AuthorInterface[]>([])
const [openSnackbar, setOpenSnackbar] =useState(false)
const [alertInfoSnackbar, setAlertInfoSnackbar] = useState<AlertInfoSnackbar>({
  severity: 'success',
  message: ''
})
const getBooks = (data: BookInterface[]) => {
  setBooks(data)
}

const getAuthors = (data: AuthorInterface[]) => {
  setAuthors(data)
}

const handlerGlobalOpenSnackbarChange = (payload: boolean) => {
  setOpenSnackbar(payload)
}

const handlerGlobalalertInfoSnackbarChange = ( payload: AlertInfoSnackbar) => {
  setAlertInfoSnackbar(payload)
}
  const providerValue = {
    globalBooks: books,
    globalAuthors: authors,
    globalGetBooks: getBooks,
    globalGetAuthors: getAuthors,
    globalOpenSnackbar: openSnackbar,
    globalalertInfoSnackbar: alertInfoSnackbar,
    globalOpenSnackbarChange: handlerGlobalOpenSnackbarChange,
    globalalertInfoSnackbarChange: handlerGlobalalertInfoSnackbarChange
  }
  return (
    <GlobalState.Provider value={providerValue}>
      {props.children}
    </GlobalState.Provider>
  )
}