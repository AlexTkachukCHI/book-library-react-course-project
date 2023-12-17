import classes from "./BookList.module.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Book} from "../models/booklist.models";
import BookService from "../common/services/BookService";

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
            <h1>Book Library</h1>
            <table border={2} className={classes.table}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Genre</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td className={classes.description}>{book.description}</td>
                            <td>{book.genre}</td>
                            <td>{book.rating}</td>
                            <td><Link to={`/books/${book.id}`}><button>View</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BookList;
