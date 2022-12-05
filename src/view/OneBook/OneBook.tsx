import { FC, useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { getOneBook, deletBook, editBook } from '../../services/books.service'
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Rating, Stack, TextField } from '@mui/material';

import { CardComponentBook } from '../../components/CardComponentBook/CardComponentBook';
import styles from './OneBook.module.scss'
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

	const [showRating, setShowRating] = useState(true)
	const [ratingValue, setRatingValue] = useState(5)
	const [isBookEdit, setIsBookEdit] = useState(false)


	const editTitle = useRef<HTMLInputElement>()
	const editDesc = useRef<HTMLTextAreaElement>()
	const { id } = useParams()
	const navigate = useNavigate()
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
	}, [id, showRating, isBookEdit])
	const deleteBook = (id: number) => {

		deletBook(id.toString())
			.then(res => {
				console.log(res)
			})
			.catch((e) => {
				console.error(e)
			})
			.finally(() => {
				navigate('/all')
			})

	}


	const addRating = (payload: any) => {

		payload.rating.push(ratingValue)

		const newPayload = { ...payload }
		console.log(newPayload)
		editBook(newPayload)
			.then(res => console.log(res))
			.catch((e) => console.log(e))
		setShowRating(false)
	}

	const editBookFc = (payload: any) => {

		const title = editTitle.current?.value !== '' ? editTitle.current?.value : book.title
		const desc = editDesc.current?.value !== '' ? editDesc.current?.value : book.desc
		const newPayload = { ...payload, title, desc }
		console.log(newPayload)
		editBook(newPayload)
			.then(res => {
				setIsBookEdit(false)
				console.log(res)
			})
			.catch((e) => console.log(e))
	}

	return (
		<>
			{!isBookEdit && <CardComponentBook
				title={book.title}
				classCss={'px150'}
				author={book.author}
				desc={book.desc}
				isBackArrow={true}
				imgScr={book.url}
				rating={book.rating || []}
			>
				<Button size="small" disabled={!showRating} onClick={() => addRating(book)} >dodaj ocenę</Button>
				<Button size="small" color='warning' onClick={() => setIsBookEdit(true)}>Edytuj</Button>
				<Button size="small" color='error' onClick={() => deleteBook(book.id)}>Usuń</Button>

			</CardComponentBook>}
			{(showRating && !isBookEdit) && <>
				<h2>Dodaj ocenę książki </h2>
				<Stack >
					<Rating name="size-large" value={ratingValue} max={10} size="large" onChange={(event, value) => { setRatingValue(value || 1) }} />
				</Stack>
			</>}
			{isBookEdit &&
				<>
					<Box className={styles.blockPadding}>

						<FormControl sx={{ marginBottom: 4 }}>
							<InputLabel htmlFor='edit-title'>Tytuł ksiązki</InputLabel>
							<Input id='edit-title' placeholder={book.title} inputRef={editTitle} />
							<FormHelperText id="my-helper-text">Poprzednia wartośc {book.title}</FormHelperText>
						</FormControl>
						<TextField
							id='edit-desc'
							label="Opis ksiązki"
							variant="standard"
							multiline
							maxRows={10}
							helperText={'Poprzedni opis: ' + book.desc}
							inputRef={editDesc}
						/>
					</Box>
					<Button size="small" color='success' onClick={() => editBookFc(book)}>Zapisz zminy</Button>
				</>
			}
			{/* <Snackbar open={global.globalOpenSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={global.globalalertInfoSnackbar.severity} sx={{ width: '100%' }}>
          {global.globalalertInfoSnackbar.message}
        </Alert>
      </Snackbar> */}
		</>
	)

}
