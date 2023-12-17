import classes from "./BookList.module.css"
import {Link} from "react-router-dom";

const books = [
    {
        "id": 1,
        "name": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "description": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.",
        "genre": "Fantasy",
        "rating": 4.52
    },
    {
        "id": 2,
        "name": "Animal Farm",
        "author": "George Orwell",
        "description": "All animals are equal, but some animals are more equal than others.” A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.",
        "genre": "Classics",
        "rating": 3.98
    },
    {
        "id": 3,
        "name": "The Golden Notebook",
        "author": "Doris Lessing",
        "description": "Anna is a writer, author of one very successful novel, who now keeps four notebooks. In one, with a black cover, she reviews the African experience of her earlier year. In a red one she records her political life, her disillusionment with communism. In a yellow one she writes a novel in which the heroine relives part of her own experience. And in the blue one she keeps a personal diary. Finally, in love with an American writer and threatened with insanity.",
        "genre": "Fiction",
        "rating": 3.76
    }
];

function BookList() {

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
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td className={classes.description}>{book.description}</td>
                            <td>{book.genre}</td>
                            <td>{book.rating}</td>
                            <td><Link relative="route" to={`${book.id}`}><button>View</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BookList;
