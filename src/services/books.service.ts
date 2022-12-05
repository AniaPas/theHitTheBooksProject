import axios from 'axios';
import { BookInterface } from '../Store/GlobalStore';

const API = 'http://localhost:3004'

const getBooks = () => {
    const apiBooks = `${API}/books`
    return axios.get(apiBooks)
}
const getOneBook =(id: string) => {
    // do pobierania pojedyniczej ksiązki
    const apiOneBook = `${API}/books/${id}`
    return axios.get(apiOneBook)
}

const getAuthors = () => {
    const apiAuthors = `${API}/author`
    return  axios.get(apiAuthors)
}

const addNewBook = (payload: BookInterface) => {
    const apiBooks = `${API}/books`
    return axios.post(apiBooks, payload)
}

const addAuthor = (payload: any) => {
    console.log(payload)
    const apiAuthors = `${API}/author`
    return axios.post(apiAuthors, payload)
}
const deletBook = (id: string) => {
    const apiBooks = `${API}/books/${id}` 
    return axios.delete(apiBooks)
}

const editBook = (payload: BookInterface) => {
    const apiBooks = `${API}/books/${payload.id}` 
    return axios.put(apiBooks, payload)

}
export {
    getBooks,
    getOneBook,
    getAuthors,
    addNewBook,
    addAuthor,
    deletBook,
    editBook
}