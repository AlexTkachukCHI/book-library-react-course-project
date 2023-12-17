import {Link, useParams} from "react-router-dom";
import React from "react";
import classes from "./BookDetails.module.css"

function BookDetails() {
    const {id} = useParams();

    return (
        <div className={classes.container}>
            <div className={classes.back}>
                <Link to=".." >Back</Link>
            </div>
            <h1 className={classes.title}>Book Details</h1>

            <div className={classes.field}>
                <label htmlFor="book-id">ID:</label>
                <span id="book-id">{id}</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-name">Name:</label>
                <span id="book-name">The Lord of the Rings</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-author">Author:</label>
                <span id="book-author">J.R.R. Tolkien</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-description">Description:</label>
                <p id="book-description">In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.</p>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-genre">Genre:</label>
                <span id="book-genre">Fantasy</span>
            </div>

            <div className={classes.field}>
                <label htmlFor="book-rating">Rating:</label>
                <span id="book-rating">4.52</span>
            </div>
        </div>
    );
}

export default BookDetails;
