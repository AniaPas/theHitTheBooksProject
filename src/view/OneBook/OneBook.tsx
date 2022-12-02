import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getOneBook } from '../../services/books.service'
import {  Button } from '@mui/material';

import { CardComponentBook } from '../../components/CardComponentBook/CardComponentBook'
export const OneBook: FC = () => {
    interface BookInterface {
        id: number,
        title: string,
        author: string,
        desc: string,
        years: number,
        rating: number[],
        url?: string,
    }
    const [book, setBook] = useState<BookInterface>({} as BookInterface)
    const { id } = useParams()

    useEffect(() => {
        const getOneBookFetch = () => {
            if (id) {
                const book = getOneBook(id)
                book.then(item => {
                    setBook(item.data)
                }).catch((err) => {
                    console.error(err)
                })
            } 
        }
        getOneBookFetch()
        // ten return 'sprząta po useEffect, 
        // uzywamy go kiedy faktycznie potrzebujemy, coś posprzatać.
        return () => {
            console.log('unmounts')
        }
    }, [id])
    return (
        <CardComponentBook 
            title={book.title} 
            classCss={'vh70'} 
            author={book.author} 
            desc={book.desc}
            isBackArrow={true}
            imgScr={book.url}
        >
            <Button size="small">dodaj ocenę</Button>
        </CardComponentBook>)
    
}
