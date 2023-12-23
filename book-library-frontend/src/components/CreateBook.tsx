import {
    Button,
    Container,
    FormControl, FormControlLabel,
    Grid,
    Rating, TextField
} from "@mui/material";
import {useState} from "react";
import {Book} from "../models/booklist.models";
import bookService from "../common/services/BookService";
import {useNavigate} from "react-router-dom";

function CreateBook() {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [description, setDescription] = useState<string>("")
    const [rating, setRating] = useState<number>(0);

    const onSubmit = (event: any) => {
        event.preventDefault();
        const book: Book = {
            name,
            author,
            genre,
            description,
            rating: +rating
        };

        bookService.create(book).then(() => {
            navigate("..");
        }).catch((e: Error) => {
            console.log(e);
        });
    }

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid xs={2} sx={{marginTop: 3}}>
                    <Button>Back</Button>
                </Grid>
                <Grid xs={8}>
                    <h1>Create Book</h1>
                </Grid>
                <Grid xs={2}></Grid>
            </Grid>
            <form onSubmit={onSubmit}>
                <Grid container border={1} padding={5}>
                    <Grid xs={6}>
                        <FormControl>
                            <FormControlLabel control={<TextField onChange={(e) => setName(e.target.value)} required/>} label="Name" labelPlacement="start" sx={{bgColor: "#ecf0f1"}} />
                        </FormControl>
                    </Grid>
                    <Grid xs={6}>
                        <FormControl>
                            <FormControlLabel control={<TextField onChange={(e) => setAuthor(e.target.value)} required/>} label="Author" labelPlacement="start" sx={{bgColor: "#ecf0f1"}} />
                        </FormControl>
                    </Grid>
                    <Grid xs={6} sx={{marginTop: 3}}>
                        <FormControl>
                            <FormControlLabel control={<TextField onChange={(e) => setGenre(e.target.value)} required/>} label="Genre" labelPlacement="start" sx={{bgColor: "#ecf0f1"}} />
                        </FormControl>
                    </Grid>
                    <Grid xs={6} sx={{marginTop: 5}}>
                        <FormControl>
                            <FormControlLabel control={<Rating onChange={(_, value) => setRating(value!)} />} label="Rating" labelPlacement="start" sx={{bgColor: "#ecf0f1"}} />
                        </FormControl>
                    </Grid>
                    <Grid xs={12}>
                        <FormControl fullWidth sx={{marginTop: 5}}>
                            <FormControlLabel control={<TextField onChange={(e) => setDescription(e.target.value)} multiline minRows={3} fullWidth />} label="Description" labelPlacement="start" sx={{bgColor: "#ecf0f1"}} />
                        </FormControl>
                    </Grid>
                    <Grid xs={12} sx={{marginTop: 5}}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default CreateBook;
