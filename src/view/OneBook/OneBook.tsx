//hooks
import { FC, useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

//services
import { getOneBook, deletBook, editBook } from "../../services/books.service";

//mui
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Rating,
  Stack,
  TextField,
} from "@mui/material";

//styles
import styles from "./OneBook.module.scss";

//component
import { CardComponentBook } from "../../components/CardComponentBook/CardComponentBook";

export const OneBook: FC = () => {
  interface BookInterface {
    id: number;
    title: string;
    author: string;
    desc: string;
    years: number;
    rating: number[];
    url?: string;
  }
  const [book, setBook] = useState<BookInterface>({} as BookInterface);

  const [showRating, setShowRating] = useState(true);
  const [ratingValue, setRatingValue] = useState(5);
  const [isBookEdit, setIsBookEdit] = useState(false);

  const editTitle = useRef<HTMLInputElement>();
  const editDesc = useRef<HTMLTextAreaElement>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getOneBookFetch = () => {
      if (id) {
        const book = getOneBook(id);
        book
          .then((item) => {
            setBook(item.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    getOneBookFetch();
  }, [id, showRating, isBookEdit]);
  const deleteBook = (id: number) => {
    deletBook(id.toString())
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        navigate("/all");
      });
  };

  const addRating = (payload: any) => {
    payload.rating.push(ratingValue);

    const newPayload = { ...payload };
    console.log(newPayload);
    editBook(newPayload)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setShowRating(false);
  };

  const editBookFc = (payload: any) => {
    const title =
      editTitle.current?.value !== "" ? editTitle.current?.value : book.title;
    const desc =
      editDesc.current?.value !== "" ? editDesc.current?.value : book.desc;
    const newPayload = { ...payload, title, desc };
    console.log(newPayload);
    editBook(newPayload)
      .then((res) => {
        setIsBookEdit(false);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {!isBookEdit && (
        <CardComponentBook
          title={book.title}
          classCss={"coverImg"}
          author={book.author}
          desc={book.desc}
          isBackArrow={true}
          imgScr={book.url}
          rating={book.rating || []}
        >
          <Button
            size='small'
            sx={{
              fontWeight: 600,
              transition: "all 0.45s",
              "&:hover": {
                backgroundColor: "#ffc107",
              },
            }}
            disabled={!showRating}
            onClick={() => addRating(book)}
          >
            Add rating
          </Button>
          <Button
            size='small'
            color='primary'
            sx={{
              fontWeight: 600,
              transition: "all 0.45s",
              "&:hover": {
                backgroundColor: "#ffc107",
              },
            }}
            onClick={() => setIsBookEdit(true)}
          >
            Edit
          </Button>
          <Button
            size='small'
            color='primary'
            sx={{
              backgroundColor: "#ffc107",
              fontWeight: 600,
              transition: "all 0.45s",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => deleteBook(book.id)}
          >
            Remove
          </Button>
        </CardComponentBook>
      )}
      {showRating && !isBookEdit && (
        <>
          <h2>Dodaj ocenę książki </h2>
          <Stack>
            <Rating
              name='size-large'
              value={ratingValue}
              max={10}
              size='large'
              onChange={(event, value) => {
                setRatingValue(value || 1);
              }}
            />
          </Stack>
        </>
      )}
      {isBookEdit && (
        <>
          <Box className={styles.blockPadding}>
            <FormControl sx={{ marginBottom: 4 }}>
              <InputLabel htmlFor='edit-title'>Book title</InputLabel>
              <Input
                id='edit-title'
                placeholder={book.title}
                inputRef={editTitle}
              />
              <FormHelperText id='my-helper-text'>
                Previous value: {book.title}
              </FormHelperText>
            </FormControl>
            <TextField
              id='edit-desc'
              label='Book description'
              variant='standard'
              multiline
              maxRows={10}
              helperText={"Previous description: " + book.desc}
              inputRef={editDesc}
            />
          </Box>
          <Button
            size='small'
            color='primary'
            sx={{ backgroundColor: "#ffc107", fontWeight: 600 }}
            onClick={() => editBookFc(book)}
          >
            Save
          </Button>
        </>
      )}
    </>
  );
};
