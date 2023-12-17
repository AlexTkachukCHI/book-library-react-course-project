package com.chicourse.bookreactcourseproject.api;

import com.chicourse.bookreactcourseproject.api.dto.BookDto;
import com.chicourse.bookreactcourseproject.service.BookService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/books")
@RestController
@RequiredArgsConstructor
public class BookController {

  private final BookService bookService;

  @GetMapping
  public List<BookDto> findAllBooks() {
    return bookService.findAll();
  }

  @GetMapping("/{id}")
  public BookDto findBookById(@PathVariable Long id) {
    return bookService.findById(id);
  }

  @PostMapping
  public BookDto createBook(@RequestBody BookDto bookDto) {
    return bookService.create(bookDto);
  }

  @PutMapping("/{id}")
  public BookDto updateBook(@PathVariable Long id, @RequestBody BookDto bookDto) {
    return bookService.update(id, bookDto);
  }

  @DeleteMapping("/{id}")
  public void deleteBook(@PathVariable Long id) {
    bookService.deleteById(id);
  }
}
