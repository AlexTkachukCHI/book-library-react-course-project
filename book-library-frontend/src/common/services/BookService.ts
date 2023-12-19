import http from "../http-common";
import {Book} from "../../models/booklist.models";

class BookService {
    getAll() {
        return http.get<Array<Book>>("/books");
    }

    get(id: string) {
        return http.get<Book>(`/books/${id}`);
    }
}
const bookService = new BookService();
export default bookService;
