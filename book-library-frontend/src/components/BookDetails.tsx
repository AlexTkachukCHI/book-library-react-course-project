import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import classes from "./BookDetails.module.css"
import {Book} from "../models/booklist.models";
import BookService from "../common/services/BookService";
import {Container, Grid} from "@mui/material";

function BookDetails() {
    const params = useParams();
    const [book, setBook] = useState<Book>();

    useEffect(() => {
        BookService.get(String(params.id)).then((response: any) => {
            setBook(response.data);
        }).catch((e: Error) => {
            console.log(e);
        })
    }, [params.id])

    return (
        <Container maxWidth={"lg"} className={classes.container}>
            <Grid container>
                <Grid xs={2}>
                    <div className={classes.back}>
                        <Link to="..">Back</Link>
                    </div>
                </Grid>
                <Grid xs={8}>
                    <h1 className={classes.title}>Book Details</h1>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-id">ID:</label>
                        <span id="book-id">{book?.id}</span>
                    </div>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-name">Name:</label>
                        <span id="book-name">{book?.name}</span>
                    </div>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-author">Author:</label>
                        <span id="book-author">{book?.author}</span>
                    </div>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-description">Description:</label>
                        <p id="book-description">{book?.description}</p>
                    </div>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-genre">Genre:</label>
                        <span id="book-genre">{book?.genre}</span>
                    </div>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.field}>
                        <label htmlFor="book-rating">Rating:</label>
                        <span id="book-rating">{book?.rating}</span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BookDetails;
