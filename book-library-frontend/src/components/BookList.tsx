import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Book} from "../models/booklist.models";
import BookService from "../common/services/BookService";
import {Container, Grid} from "@mui/material";

function BookList() {
    const [books, setBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        BookService.getAll().then((response: any) => {
            console.log(1);
            setBooks(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        })
    }, []);

    return (
        <>
            <Container maxWidth={"lg"}>
                <h1>Book Library</h1>
                <Grid container alignItems="center" border={1}>
                    <Grid xs={1} border={1}>
                        ID
                    </Grid>
                    <Grid xs={3} border={1}>
                        NAME
                    </Grid>
                    <Grid xs={3} border={1}>
                        AUTHOR
                    </Grid>
                    <Grid xs={2} border={1}>
                        GENRE
                    </Grid>
                    <Grid xs={1} border={1}>
                        RATING
                    </Grid>
                    <Grid xs={2} border={1}>
                        ACTIONS
                    </Grid>
                    {books.map(book => (
                        <>
                            <Grid xs={1} border={1} padding={3}>
                                {book.id}
                            </Grid>
                            <Grid xs={3} border={1}  padding={3}>
                                {book.name}
                            </Grid>
                            <Grid xs={3} border={1}  padding={3}>
                                {book.author}
                            </Grid>
                            <Grid xs={2} border={1}  padding={3}>
                                {book.genre}
                            </Grid>
                            <Grid xs={1} border={1}  padding={3}>
                                {book.rating}
                            </Grid>
                            <Grid xs={2} border={1}  padding={3}>
                                <Link to={`/books/${book.id}`}>View</Link>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default BookList;
