import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import classes from "./BookDetails.module.css"
import {Book} from "../models/booklist.models";
import BookService from "../common/services/BookService";

function BookDetails() {
    const params = useParams();
    const [book, setBook] = useState<Book>();

    useEffect(() => {
        BookService.get(String(params.id)).then((response: any) => {
            setBook(response.data);
        }).catch((e: Error) => {
            console.log(e);
        })
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.back}>
                <Link to="..">Back</Link>
            </div>
            <h1 className={classes.title}>Book Details</h1>

            <div className={classes.field}>
                <label htmlFor="book-id">ID:</label>
                <span id="book-id">{book?.id}</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-name">Name:</label>
                <span id="book-name">{book?.name}</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-author">Author:</label>
                <span id="book-author">{book?.author}</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-description">Description:</label>
                <p id="book-description">{book?.description}</p>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-genre">Genre:</label>
                <span id="book-genre">{book?.genre}</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-rating">Rating:</label>
                <span id="book-rating">{book?.rating}</span>
            </div>
        </div>
    );
}

export default BookDetails;
