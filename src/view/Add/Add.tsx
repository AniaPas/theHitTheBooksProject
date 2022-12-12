import { FormEvent, FC, useRef, useState, useContext, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "./Add.module.scss";
import uniqid from "uniqid";
import {
  addNewBook,
  getAuthors,
  addAuthor,
} from "../../services/books.service";
import { useNavigate } from "react-router-dom";
import { BookInterface, GlobalState } from "../../Store/GlobalStore";
import Modal from "@mui/material/Modal";
import { debounce } from "lodash";
//eslint-disable-next-line
interface Payload {
  author: string;
  title: string;
  desc: string;
  years: number | undefined;
  rating: number[];
  url: string;
}

const Add: FC = () => {
  //

  const date = new Date().getFullYear().toLocaleString();
  // useState ustala datę w dataPicker na rok bieżacy
  const [datePickerValue, setdatePickerValue] = useState<Dayjs | null>(
    dayjs(date)
  );

  const maxDate = dayjs(date);

  const [isBookInvalid, setBookInvalid] = useState(true);

  const navigate = useNavigate();

  const form = useRef<HTMLCollection>();

  const createId = (uniqName: string) => {
    return `${uniqid()} ${uniqName}`;
  };
  const global = useContext(GlobalState);
  const getAllAuthors = async () => {
    const authors = await getAuthors();
    await global.globalGetAuthors(authors.data);
  };
  useEffect(() => {
    getAllAuthors();
  }, []);

  const isObjComplete = (obj: BookInterface): boolean => {
    const objKeys = Object.keys(obj);
    const isComplete = objKeys.every((item: string) => {
      return obj.author !== "" && obj.years !== undefined;
    });
    return isComplete;
  };

  const submitBook = (event: FormEvent) => {
    event.preventDefault();

    if (form.current && form.current !== null) {
      const onlyElForm = Array.from(form.current).filter((item) => {
        if (
          item.id.search("author") > -1 ||
          item.id.search("title") > -1 ||
          item.id.search("describe") > -1 ||
          item.id.search("img-url") > -1
        ) {
          return item;
        } else {
          return [];
        }
      });

      const payload: BookInterface = {
        author: (onlyElForm[0] as HTMLInputElement).value,
        title: (onlyElForm[1] as HTMLInputElement).value,
        desc: (onlyElForm[2] as HTMLInputElement).value,
        years: datePickerValue?.year(),
        rating: [5],
        url: (onlyElForm[3] as HTMLInputElement).value,
      };

      const isValid = isObjComplete(payload);
      setBookInvalid(isValid);
      // setBookInvalid
      if (isValid) {
        addNewBook(payload)
          .then((respons) => {
            global.globalalertInfoSnackbarChange({
              severity: "success",
              message: `The book ${payload.title} by ${payload.author} has been added`,
              addBook: true,
            });
            global.globalOpenSnackbarChange(true);
          })
          .catch((err) => {
            global.globalalertInfoSnackbarChange({
              severity: "error",
              message: `Adding book ${payload.title} by ${payload.author}failure`,
            });
            global.globalOpenSnackbarChange(true);
          })
          .finally(() => {
            navigate("/all");
          });
      } else {
        ///
        setBookInvalid(isValid);
      }
    }
  };
  const idAuthor = createId("author");
  const idTitle = createId("title");
  const iddescribe = createId("describe");
  const idImg = createId("img-url");

  const [open, setOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState("");
  const authorName = useRef<HTMLInputElement>();
  const authorNote = useRef<HTMLInputElement>();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const saveNota = () => {
    const payload = {
      author: newAuthor,
      nota:
        authorNote.current?.value !== ""
          ? authorNote.current?.value
          : `No info about author ${newAuthor}`,
    };

    addAuthor(payload)
      .then((res) => {
        global.globalalertInfoSnackbarChange({
          severity: "success",
          message: `Author info ${payload.author} has been added`,
          addBook: false,
        });
        global.globalOpenSnackbarChange(true);
      })
      .catch((err) => {
        console.error(err);
        global.globalalertInfoSnackbarChange({
          severity: "error",
          message: `Saving the info about ${payload.author} has failed`,
        });
        global.globalOpenSnackbarChange(true);
      });

    setOpen(false);
  };
  const checkInput = () => {
    const autorNameInputVal = (
      authorName.current?.children[0] as HTMLInputElement
    ).value;
    const isAuthor = global.globalAuthors.some(
      (item) => item.author.toUpperCase() === autorNameInputVal.toUpperCase()
    );
    if (!isAuthor) {
      setNewAuthor(autorNameInputVal);
      setOpen(true);
    }
  };
  const handleCloseSnackbar = () => {
    global.globalOpenSnackbarChange(false);
  };
  return (
    <>
      <Box component='form' className={styles.blockPadding} ref={form}>
        <FormControl>
          <InputLabel htmlFor={idAuthor}>Book author</InputLabel>
          <Input
            id={idAuthor}
            ref={authorName}
            onChange={debounce(checkInput, 1000)}
          />
          <FormHelperText id='my-helper-text'>Name and surname</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor={idTitle}>Book title</InputLabel>
          <Input id={idTitle} />
          <FormHelperText id='my-helper-text'>
            Provide the book title
          </FormHelperText>
        </FormControl>

        <TextField
          id={iddescribe}
          label='Book description'
          variant='standard'
          multiline
          maxRows={10}
        />
        <div className={styles.WrapperDataPicker}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={["year"]}
              label='Publishing date'
              className={styles.dataPicker}
              value={datePickerValue}
              maxDate={maxDate}
              onChange={(newValue) => {
                const val = newValue ? newValue : dayjs(date);
                setdatePickerValue(val);
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </div>

        <FormControl>
          <InputLabel htmlFor={idImg}>Add a link</InputLabel>
          <Input id={idImg} aria-describedby='my-helper-text' />
          <FormHelperText id='my-helper-text'>
            Add the image link
          </FormHelperText>
        </FormControl>
        {!isBookInvalid && <p>You have not filled the fields correctly</p>}
        <div className={styles.Wrapperbutton}>
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            className={styles.button}
            sx={{
              backgroundColor: "#ffc107",
              boxShadow: "0 0 0",
              fontWeight: 600,
              transition: "all 0.45s",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "0 0 0",
              },
            }}
            onClick={(event) => submitBook(event)}
          >
            Save
          </Button>
        </div>
      </Box>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant='h6'>
            Add a note about the author: {newAuthor}{" "}
          </Typography>
          <TextField
            id='nota'
            label='Author bio note'
            variant='standard'
            inputRef={authorNote}
            multiline
            fullWidth
            maxRows={10}
          />

          <Button color='primary' onClick={saveNota}>
            Save
          </Button>
        </Box>
      </Modal>
      {!global.globalalertInfoSnackbar.addBook && (
        <Snackbar
          open={global.globalOpenSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={global.globalalertInfoSnackbar.severity}
            sx={{ width: "100%" }}
          >
            {global.globalalertInfoSnackbar.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Add;
